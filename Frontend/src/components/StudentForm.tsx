import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building,
  BookOpen,
  GraduationCap,
  Award,
  Globe,
  User,
  HeartHandshake,
  DollarSign,
  Users,
  ChevronRight,
  Check,
  Loader2,
  Sparkles,
  Zap,
  Info
} from "lucide-react";
import { StudentFormData } from "../types";
import { cn } from "../lib/utils";

interface StudentFormProps {
  onSubmit: (data: StudentFormData) => void;
  loading: boolean;
}

const steps = [
  { id: 1, title: "Academic", icon: GraduationCap, description: "Your study details" },
  { id: 2, title: "Personal", icon: User, description: "About you" },
  { id: 3, title: "Financial", icon: DollarSign, description: "Financial status" },
  { id: 4, title: "Affiliations", icon: Users, description: "Connections" },
];

const StudentForm: React.FC<StudentFormProps> = ({ onSubmit, loading }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [formData, setFormData] = useState<StudentFormData>({
    faculty: "",
    year: 1,
    program: "",
    gpa: 0,
    campus: "Vancouver",
    citizenshipStatus: "Canadian Citizen",
    indigenousStatus: false,
    hasDisability: false,
    hasStudentLoan: false,
    hasFinancialNeed: false,
    gender: "",
    affiliations: {},
    formerYouthInCare: false,
    partTimeStudent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else if (type === "number") {
      setFormData((prev) => ({
        ...prev,
        [name]: parseFloat(value) || 0,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return !!formData.faculty && !!formData.campus && !!formData.year;
      case 2:
        return !!formData.citizenshipStatus;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length && isStepValid()) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Modern Radio Card Component for Professional Selection
  const RadioCard = ({
    title,
    description,
    checked,
    onChange,
    icon: Icon
  }: { title: string; description?: string; checked: boolean; onChange: () => void; icon?: React.ElementType }) => (
    <div
      onClick={onChange}
      className={cn(
        "cursor-pointer group flex items-start gap-4 p-5 rounded-xl border transition-all duration-200 select-none",
        "backdrop-blur-sm",
        checked
          ? "bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_0_1px_rgba(6,182,212,0.3)]"
          : "bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/80 hover:border-slate-600"
      )}
    >
      <div className={cn(
        "mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors duration-200",
        checked ? "border-cyan-500 bg-cyan-500 text-slate-900" : "border-slate-500 text-transparent group-hover:border-slate-400"
      )}>
        <Check size={12} strokeWidth={4} />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          {Icon && <Icon className={cn("w-4 h-4", checked ? "text-cyan-400" : "text-slate-500 group-hover:text-slate-400")} />}
          <h4 className={cn("font-medium text-sm tracking-wide", checked ? "text-cyan-50" : "text-slate-200 group-hover:text-white")}>{title}</h4>
        </div>
        {description && <p className="text-xs text-slate-400 leading-relaxed font-normal">{description}</p>}
      </div>
    </div>
  );

  // Animation variants - Subtle slide
  const pageVariants = {
    initial: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 20 : -20, // Reduced movement for sophistication
    }),
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -20 : 20,
    }),
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 relative z-10 font-sans text-slate-200">

      {/* Minimal Stepper */}
      <div className="mb-12 relative flex items-center justify-between px-2">
        {/* Background Line */}
        <div className="absolute left-0 top-1/2 w-full h-[1px] bg-slate-800 -z-10" />

        {/* Active Line Progress */}
        <motion.div
          className="absolute left-0 top-1/2 h-[1px] bg-cyan-500 -z-10 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: (currentStep - 1) / (steps.length - 1) }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ width: '100%' }}
        />

        {steps.map((step) => {
          const isCompleted = currentStep > step.id;
          const isCurrent = currentStep === step.id;


          return (
            <div
              key={step.id}
              className="relative flex flex-col items-center group cursor-pointer"
              onClick={() => step.id < currentStep && setCurrentStep(step.id)}
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold border transition-all duration-300 bg-slate-950",
                  isCompleted ? "border-cyan-500 text-cyan-500" :
                    isCurrent ? "border-cyan-500 bg-cyan-950 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]" :
                      "border-slate-700 text-slate-500 group-hover:border-slate-500 group-hover:text-slate-400"
                )}
              >
                {isCompleted ? <Check size={16} /> : <span>{step.id}</span>}
              </div>
              <span className={cn(
                "absolute top-12 text-[10px] uppercase tracking-widest font-semibold transition-colors duration-300 w-max text-center",
                isCurrent ? "text-cyan-400" : isCompleted ? "text-cyan-600/70" : "text-slate-600"
              )}>
                {step.title}
              </span>
            </div>
          );
        })}
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-slate-900 shadow-2xl rounded-2xl border border-slate-800 overflow-hidden relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Subtle top highlight */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50" />

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ type: "tween", ease: "circOut", duration: 0.4 }}
            className="p-8 md:p-10 min-h-[480px]"
          >
            {/* Step Header */}
            <div className="mb-10 border-b border-slate-800 pb-6">
              <h2 className="text-2xl font-light text-white mb-2 flex items-center gap-3">
                {React.createElement(steps[currentStep - 1].icon, { className: "text-cyan-500 w-6 h-6 stroke-[1.5px]" })}
                {steps[currentStep - 1].title} Details
              </h2>
              <p className="text-slate-400 text-sm font-light">{steps[currentStep - 1].description}</p>
            </div>

            {/* Step 1: Academic Information */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Campus Location</label>
                    <div className="relative group">
                      <select
                        name="campus"
                        value={formData.campus}
                        onChange={handleChange}
                        className="w-full p-3 pl-10 bg-slate-950 border border-slate-700 rounded-lg text-sm text-slate-200 focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none appearance-none cursor-pointer hover:border-slate-600"
                      >
                        <option value="Vancouver">Vancouver Campus</option>
                        <option value="Okanagan">Okanagan Campus</option>
                      </select>
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4 pointer-events-none group-focus-within:text-cyan-500 transition-colors" />
                      <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-slate-600 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Current Year</label>
                    <div className="relative group">
                      <select
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className="w-full p-3 pl-10 bg-slate-950 border border-slate-700 rounded-lg text-sm text-slate-200 focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none appearance-none cursor-pointer hover:border-slate-600"
                      >
                        {[1, 2, 3, 4, 5].map(y => (
                          <option key={y} value={y}>{y === 5 ? '5+ Year' : `${y}${y === 1 ? 'st' : y === 2 ? 'nd' : y === 3 ? 'rd' : 'th'} Year`}</option>
                        ))}
                      </select>
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-bold w-4 h-4 flex items-center justify-center pointer-events-none text-[10px] border border-slate-600 rounded group-focus-within:text-cyan-500 group-focus-within:border-cyan-500">
                        {formData.year}
                      </div>
                      <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-slate-600 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Faculty / Program</label>
                  <div className="relative group">
                    <select
                      name="faculty"
                      value={formData.faculty}
                      onChange={handleChange}
                      className="w-full p-3 pl-10 bg-slate-950 border border-slate-700 rounded-lg text-sm text-slate-200 focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none appearance-none cursor-pointer hover:border-slate-600"
                    >
                      <option value="">Select your faculty...</option>
                      {["Arts", "Science", "Engineering", "Forestry", "Medicine", "Dentistry", "Law", "Graduate Studies", "Commerce/Sauder", "Education", "Land and Food Systems", "Kinesiology"].sort().map(f => (
                        <option key={f} value={f}>{f}</option>
                      ))}
                    </select>
                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4 pointer-events-none group-focus-within:text-cyan-500 transition-colors" />
                    <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-slate-600 w-4 h-4 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Cumulative GPA (0-4.33)</label>
                  <div className="relative group">
                    <input
                      type="number"
                      name="gpa"
                      value={formData.gpa || ""}
                      onChange={handleChange}
                      min="0"
                      max="4.33"
                      step="0.01"
                      placeholder="e.g., 3.8"
                      className="w-full p-3 pl-10 bg-slate-950 border border-slate-700 rounded-lg text-sm text-slate-200 focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none font-medium placeholder:text-slate-600 hover:border-slate-600"
                    />
                    <Award className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4 pointer-events-none group-focus-within:text-cyan-500 transition-colors" />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs font-medium bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">/ 4.33</div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Personal Details */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Citizenship Status</label>
                    <div className="relative group">
                      <select
                        name="citizenshipStatus"
                        value={formData.citizenshipStatus}
                        onChange={handleChange}
                        className="w-full p-3 pl-10 bg-slate-950 border border-slate-700 rounded-lg text-sm text-slate-200 focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none appearance-none cursor-pointer hover:border-slate-600"
                      >
                        <option value="Canadian Citizen">Canadian Citizen</option>
                        <option value="Permanent Resident">Permanent Resident</option>
                        <option value="Refugee">Refugee</option>
                        <option value="International">International Student</option>
                      </select>
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4 pointer-events-none group-focus-within:text-cyan-500" />
                      <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-slate-600 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Gender Identity</label>
                    <div className="relative group">
                      <select
                        name="gender"
                        value={formData.gender || ""}
                        onChange={handleChange}
                        className="w-full p-3 pl-10 bg-slate-950 border border-slate-700 rounded-lg text-sm text-slate-200 focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none appearance-none cursor-pointer hover:border-slate-600"
                      >
                        <option value="">Prefer not to say</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Non-binary">Non-binary</option>
                        <option value="Two-Spirit">Two-Spirit</option>
                      </select>
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4 pointer-events-none group-focus-within:text-cyan-500" />
                      <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-slate-600 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="pt-2 grid grid-cols-1 gap-3">
                  <RadioCard
                    title="I identify as an Indigenous Student"
                    description="First Nations, Métis, or Inuit ancestry"
                    checked={formData.indigenousStatus}
                    onChange={() => setFormData(p => ({ ...p, indigenousStatus: !p.indigenousStatus }))}
                    icon={Sparkles}
                  />

                  <RadioCard
                    title="I identify as a Person with a Disability"
                    description="Permanent disability or chronic health condition (physical or mental)"
                    checked={formData.hasDisability}
                    onChange={() => setFormData(p => ({ ...p, hasDisability: !p.hasDisability }))}
                    icon={HeartHandshake}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Financial Information */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <RadioCard
                  title="Government Student Loan Recipient"
                  description="Required for many needs-based bursaries"
                  checked={formData.hasStudentLoan}
                  onChange={() => setFormData(p => ({ ...p, hasStudentLoan: !p.hasStudentLoan }))}
                  icon={DollarSign}
                />

                <RadioCard
                  title="Demonstrated Financial Need"
                  description="You require financial support to continue your education"
                  checked={formData.hasFinancialNeed}
                  onChange={() => setFormData(p => ({ ...p, hasFinancialNeed: !p.hasFinancialNeed }))}
                  icon={Zap}
                />

                <RadioCard
                  title="Former Youth in Care"
                  description="Previous government care status in BC or elsewhere"
                  checked={formData.formerYouthInCare || false}
                  onChange={() => setFormData(p => ({ ...p, formerYouthInCare: !p.formerYouthInCare }))}
                  icon={HeartHandshake}
                />

                <RadioCard
                  title="Part-Time Student Status"
                  description="Less than full course load for current term"
                  checked={formData.partTimeStudent || false}
                  onChange={() => setFormData(p => ({ ...p, partTimeStudent: !p.partTimeStudent }))}
                  icon={Loader2}
                />
              </div>
            )}

            {/* Step 4: Affiliations */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { key: 'alphaGammaDelta', label: 'Alpha Gamma Delta Member' },
                    { key: 'canadianArmedForces', label: 'Canadian Armed Forces' },
                    { key: 'chineseAncestry', label: 'Chinese Ancestry' },
                    { key: 'iranianHeritage', label: 'Persian/Iranian Heritage' },
                    { key: 'swedishHeritage', label: 'Swedish Heritage' },
                    { key: 'ilwu', label: 'ILWU Member/Family' },
                    { key: 'ufcw', label: 'UFCW Local 1518' },
                    { key: 'beemCreditUnion', label: 'Beem Credit Union' },
                    { key: 'sikhCommunity', label: 'Sikh Community' },
                    { key: 'pipingIndustry', label: 'Piping Industry/UA 170' },
                    { key: 'royalCanadianLegion', label: 'Royal Canadian Legion' },
                    { key: 'knightsPythias', label: 'Knights Pythias' },
                  ].map((item) => {
                    const affiliationKey = item.key as keyof typeof formData.affiliations;
                    const isSelected = formData.affiliations[affiliationKey] || false;

                    return (
                      <div
                        key={item.key}
                        onClick={() => {
                          setFormData(prev => ({
                            ...prev,
                            affiliations: {
                              ...prev.affiliations,
                              [affiliationKey]: !isSelected
                            }
                          }));
                        }}
                        className={cn(
                          "cursor-pointer px-4 py-3 rounded-lg border text-sm font-medium transition-all duration-200 flex items-center justify-between select-none",
                          isSelected
                            ? "border-cyan-500 bg-cyan-950 text-cyan-200"
                            : "border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-600 hover:text-slate-300"
                        )}
                      >
                        <span>{item.label}</span>
                        {isSelected && <Check size={14} className="text-cyan-400" />}
                      </div>
                    );
                  })}
                </div>

                <div className="bg-blue-900/10 border border-blue-500/20 rounded-lg p-4 flex gap-3 items-start">
                  <Info className="text-blue-400 w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-blue-200/80 text-xs leading-relaxed">
                    Most awards are merit-based. Affiliations are optional and only help match specific niche awards.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer Actions - Clean Bar */}
        <div className="px-8 md:px-10 py-6 bg-slate-950 border-t border-slate-800 flex justify-between items-center">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="text-slate-500 text-sm font-medium hover:text-slate-300 transition-colors px-4 py-2"
            >
              Back
            </button>
          ) : (
            <div />
          )}

          {currentStep < steps.length ? (
            <button
              type="button"
              onClick={nextStep}
              disabled={!isStepValid()}
              className="bg-white text-slate-900 hover:bg-slate-200 font-semibold text-sm py-2.5 px-6 rounded-lg transition-colors shadow-lg shadow-white/5 active:scale-95 duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-sm py-3 px-8 rounded-lg shadow-lg shadow-cyan-500/20 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin w-4 h-4" /> Processing
                </>
              ) : (
                <>Find Awards <ChevronRight size={16} /></>
              )}
            </button>
          )}
        </div>
      </motion.form>

      <div className="mt-8 flex justify-center items-center gap-4 text-[10px] text-slate-600 uppercase tracking-widest font-medium">
        <span>Secure</span>
        <span className="w-1 h-1 rounded-full bg-slate-700" />
        <span>Private</span>
        <span className="w-1 h-1 rounded-full bg-slate-700" />
        <span>Local</span>
      </div>
    </div>
  );
};

export default StudentForm;