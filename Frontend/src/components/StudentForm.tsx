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
} from "lucide-react";
import { StudentFormData } from "../types";
import { cn } from "../lib/utils";

interface StudentFormProps {
  onSubmit: (data: StudentFormData) => void;
  loading: boolean;
}

const steps = [
  {
    id: 1,
    title: "Academic",
    icon: <GraduationCap className="w-5 h-5 drop-shadow-glow" />,
    description: "Your study details",
  },
  {
    id: 2,
    title: "Personal",
    icon: <User className="w-5 h-5 drop-shadow-glow" />,
    description: "About you",
  },
  {
    id: 3,
    title: "Financial",
    icon: <DollarSign className="w-5 h-5 drop-shadow-glow" />,
    description: "Financial status",
  },
  {
    id: 4,
    title: "Affiliations",
    icon: <Users className="w-5 h-5 drop-shadow-glow" />,
    description: "Connections",
  },
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
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
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
    icon,
  }: {
    title: string;
    description?: string;
    checked: boolean;
    onChange: () => void;
    icon?: React.ReactNode;
  }) => (
    <motion.div
      whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onChange}
      className={`cursor-pointer border border-transparent rounded-2xl p-5 transition-all duration-300 flex items-start space-x-4 backdrop-blur-md relative overflow-hidden group
        ${
          checked
            ? "bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)] ring-1 ring-cyan-400/30"
            : "bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/60 hover:border-cyan-500/30 hover:shadow-lg"
        }`}
    >
      {/* Dynamic glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

      <div
        className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 relative z-10
        ${
          checked
            ? "border-cyan-400 bg-cyan-400 text-slate-900 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
            : "border-slate-500 text-transparent"
        }`}
      >
        <Check size={14} strokeWidth={3} />
      </div>
      <div className="flex-1 relative z-10">
        <div className="flex items-center gap-2">
          {icon && (
            <span
              className={`${
                checked
                  ? "text-cyan-300"
                  : "text-slate-400 group-hover:text-cyan-200"
              } transition-colors`}
            >
              {icon}
            </span>
          )}
          <h4
            className={`font-semibold text-lg tracking-wide ${
              checked
                ? "text-cyan-100"
                : "text-slate-200 group-hover:text-white"
            }`}
          >
            {title}
          </h4>
        </div>
        {description && (
          <p className="text-sm text-slate-400 mt-1 leading-relaxed group-hover:text-slate-300 transition-colors">
            {description}
          </p>
        )}
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
    <div className="max-w-4xl mx-auto px-4 py-8 relative z-10 font-sans">
      {/* Progress Header - Floating Orbs */}
      <div className="mb-12 relative flex justify-between items-center px-6">
        {/* Connector Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -z-10 rounded-full overflow-hidden transform -translate-y-1/2 mx-10">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-fuchsia-500 shadow-[0_0_15px_rgba(168,85,247,0.6)]"
            initial={{ width: "0%" }}
            animate={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
            transition={{ duration: 0.6, ease: "anticipate" }}
          />
        </div>

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
                className={`w-14 h-14 rounded-full flex items-center justify-center text-lg mb-3 border-4 backdrop-blur-sm transition-all duration-500 relative z-10
                  ${
                    isCompleted
                      ? "bg-cyan-500 border-cyan-900 text-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.6)]"
                      : isCurrent
                      ? "bg-slate-900 border-cyan-400 text-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.4)] ring-4 ring-cyan-500/20"
                      : "bg-slate-900 border-slate-700 text-slate-500 hover:border-slate-500 hover:text-slate-300"
                  }`}
              >
                {isCompleted ? <Check size={16} /> : <span>{step.id}</span>}
              </div>
              <span
                className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 hidden sm:block absolute -bottom-8 w-max
                ${
                  isCurrent
                    ? "text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]"
                    : isCompleted
                    ? "text-cyan-600"
                    : "text-slate-600"
                }`}
              >
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
              <div className="space-y-10">
                <div className="text-center mb-12">
                  <motion.h2
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-300 mb-4 flex items-center justify-center gap-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                  >
                    <GraduationCap className="text-cyan-400 w-10 h-10 drop-shadow-glow" />{" "}
                    Academic Profile
                  </motion.h2>
                  <p className="text-slate-400 text-lg tracking-wide">
                    Tell us about your journey at UBC.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3 group">
                    <label className="text-xs font-bold text-cyan-500 uppercase tracking-widest ml-1 opacity-80 group-focus-within:opacity-100 group-focus-within:text-cyan-400 transition-all">
                      Campus Location
                    </label>
                    <div className="relative">
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

                  <div className="space-y-3 group">
                    <label className="text-xs font-bold text-cyan-500 uppercase tracking-widest ml-1 opacity-80 group-focus-within:opacity-100 group-focus-within:text-cyan-400 transition-all">
                      Current Year
                    </label>
                    <div className="relative">
                      <select
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className="w-full p-3 pl-10 bg-slate-950 border border-slate-700 rounded-lg text-sm text-slate-200 focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none appearance-none cursor-pointer hover:border-slate-600"
                      >
                        {[1, 2, 3, 4, 5].map((y) => (
                          <option key={y} value={y}>
                            {y === 5
                              ? "5+ Year"
                              : `${y}${
                                  y === 1
                                    ? "st"
                                    : y === 2
                                    ? "nd"
                                    : y === 3
                                    ? "rd"
                                    : "th"
                                } Year`}
                          </option>
                        ))}
                      </select>
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-bold w-4 h-4 flex items-center justify-center pointer-events-none text-[10px] border border-slate-600 rounded group-focus-within:text-cyan-500 group-focus-within:border-cyan-500">
                        {formData.year}
                      </div>
                      <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-slate-600 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3 group">
                  <label className="text-xs font-bold text-cyan-500 uppercase tracking-widest ml-1 opacity-80 group-focus-within:opacity-100 group-focus-within:text-cyan-400 transition-all">
                    Faculty / Program
                  </label>
                  <div className="relative">
                    <select
                      name="faculty"
                      value={formData.faculty}
                      onChange={handleChange}
                      className="w-full p-3 pl-10 bg-slate-950 border border-slate-700 rounded-lg text-sm text-slate-200 focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none appearance-none cursor-pointer hover:border-slate-600"
                    >
                      <option value="">Select your faculty...</option>
                      {[
                        "Arts",
                        "Science",
                        "Engineering",
                        "Forestry",
                        "Medicine",
                        "Dentistry",
                        "Law",
                        "Graduate Studies",
                        "Commerce/Sauder",
                        "Education",
                        "Land and Food Systems",
                        "Kinesiology",
                      ]
                        .sort()
                        .map((f) => (
                          <option key={f} value={f}>
                            {f}
                          </option>
                        ))}
                    </select>
                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4 pointer-events-none group-focus-within:text-cyan-500 transition-colors" />
                    <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-slate-600 w-4 h-4 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-3 group">
                  <label className="text-xs font-bold text-cyan-500 uppercase tracking-widest ml-1 opacity-80 group-focus-within:opacity-100 group-focus-within:text-cyan-400 transition-all">
                    Cumulative GPA (0-4.33)
                  </label>
                  <div className="relative">
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
                    <Award className="absolute left-5 top-4.5 text-slate-500 w-5 h-5 pointer-events-none group-focus-within:text-cyan-400 transition-colors" />
                    <div className="absolute right-5 top-4.5 text-slate-500 text-sm font-medium bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                      / 4.33
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Personal Details */}
            {currentStep === 2 && (
              <div className="space-y-10">
                <div className="text-center mb-12">
                  <motion.h2
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-cyan-300 mb-4 flex items-center justify-center gap-4"
                  >
                    <User className="text-purple-400 w-10 h-10 drop-shadow-glow" />{" "}
                    Personal Details
                  </motion.h2>
                  <p className="text-slate-400 text-lg">
                    Help us verify your eligibility criteria.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3 group">
                    <label className="text-xs font-bold text-purple-500 uppercase tracking-widest ml-1 opacity-80 group-focus-within:opacity-100 transition-all">
                      Citizenship Status
                    </label>
                    <div className="relative">
                      <select
                        name="citizenshipStatus"
                        value={formData.citizenshipStatus}
                        onChange={handleChange}
                        className="w-full p-3 pl-10 bg-slate-950 border border-slate-700 rounded-lg text-sm text-slate-200 focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none appearance-none cursor-pointer hover:border-slate-600"
                      >
                        <option value="Canadian Citizen">
                          Canadian Citizen
                        </option>
                        <option value="Permanent Resident">
                          Permanent Resident
                        </option>
                        <option value="Refugee">Refugee</option>
                        <option value="International">
                          International Student
                        </option>
                      </select>
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4 pointer-events-none group-focus-within:text-cyan-500" />
                      <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-slate-600 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-3 group">
                    <label className="text-xs font-bold text-purple-500 uppercase tracking-widest ml-1 opacity-80 group-focus-within:opacity-100 transition-all">
                      Gender Identity
                    </label>
                    <div className="relative">
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
                    onChange={() =>
                      setFormData((p) => ({
                        ...p,
                        indigenousStatus: !p.indigenousStatus,
                      }))
                    }
                    icon={<Sparkles size={20} />}
                  />

                  <SelectionCard
                    title="I identify as a Person with a Disability"
                    description="Permanent disability or chronic health condition"
                    checked={formData.hasDisability}
                    onChange={() =>
                      setFormData((p) => ({
                        ...p,
                        hasDisability: !p.hasDisability,
                      }))
                    }
                    icon={<HeartHandshake size={20} />}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Financial Information */}
            {currentStep === 3 && (
              <div className="space-y-10">
                <div className="text-center mb-12">
                  <motion.h2
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-cyan-300 mb-4 flex items-center justify-center gap-4"
                  >
                    <DollarSign className="text-emerald-400 w-10 h-10 drop-shadow-glow" />{" "}
                    Financial Situation
                  </motion.h2>
                  <p className="text-slate-400 text-lg">
                    We use this to find needs-based bursaries.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-5">
                  <SelectionCard
                    title="Government Student Loan Recipient"
                    description="receiving full-time government student loans for the current year"
                    checked={formData.hasStudentLoan}
                    onChange={() =>
                      setFormData((p) => ({
                        ...p,
                        hasStudentLoan: !p.hasStudentLoan,
                      }))
                    }
                    icon={<DollarSign size={20} />}
                  />

                  <SelectionCard
                    title="Demonstrated Financial Need"
                    description="You require financial assistance to continue your education"
                    checked={formData.hasFinancialNeed}
                    onChange={() =>
                      setFormData((p) => ({
                        ...p,
                        hasFinancialNeed: !p.hasFinancialNeed,
                      }))
                    }
                    icon={<Zap size={20} />}
                  />

                  <SelectionCard
                    title="Former Youth in Care"
                    description="You were in government care in BC or elsewhere"
                    checked={formData.formerYouthInCare || false}
                    onChange={() =>
                      setFormData((p) => ({
                        ...p,
                        formerYouthInCare: !p.formerYouthInCare,
                      }))
                    }
                    icon={<HeartHandshake size={20} />}
                  />

                  <SelectionCard
                    title="Part-Time Student Status"
                    description="Currently enrolled in less than a full-time course load"
                    checked={formData.partTimeStudent || false}
                    onChange={() =>
                      setFormData((p) => ({
                        ...p,
                        partTimeStudent: !p.partTimeStudent,
                      }))
                    }
                    icon={<Loader2 size={20} />}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Affiliations */}
            {currentStep === 4 && (
              <div className="space-y-10">
                <div className="text-center mb-12">
                  <motion.h2
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-orange-300 mb-4 flex items-center justify-center gap-4"
                  >
                    <Users className="text-amber-400 w-10 h-10 drop-shadow-glow" />{" "}
                    Affiliations
                  </motion.h2>
                  <p className="text-slate-400 text-lg">
                    Select any communities or groups you belong to.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      key: "alphaGammaDelta",
                      label: "Alpha Gamma Delta Member",
                    },
                    {
                      key: "canadianArmedForces",
                      label: "Canadian Armed Forces",
                    },
                    { key: "chineseAncestry", label: "Chinese Ancestry" },
                    {
                      key: "iranianHeritage",
                      label: "Persian/Iranian Heritage",
                    },
                    { key: "swedishHeritage", label: "Swedish Heritage" },
                    { key: "ilwu", label: "ILWU Member/Family" },
                    { key: "ufcw", label: "UFCW Local 1518" },
                    { key: "beemCreditUnion", label: "Beem Credit Union" },
                    { key: "sikhCommunity", label: "Sikh Community" },
                    { key: "pipingIndustry", label: "Piping Industry/UA 170" },
                    {
                      key: "royalCanadianLegion",
                      label: "Royal Canadian Legion",
                    },
                    { key: "knightsPythias", label: "Knights Pythias" },
                  ].map((item) => {
                    const affiliationKey =
                      item.key as keyof typeof formData.affiliations;
                    const isSelected =
                      formData.affiliations[affiliationKey] || false;

                    return (
                      <div
                        key={item.key}
                        whileHover={{
                          scale: 1.05,
                          borderColor: "rgba(6, 182, 212, 0.5)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            affiliations: {
                              ...prev.affiliations,
                              [affiliationKey]: !isSelected,
                            },
                          }));
                        }}
                        className={`cursor-pointer p-4 rounded-xl border transition-all duration-300 flex items-center justify-between backdrop-blur-sm
                          ${
                            isSelected
                              ? "border-cyan-500 bg-cyan-900/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                              : "border-slate-700/50 bg-slate-800/30 hover:bg-slate-700/50 hover:border-slate-500"
                          }`}
                      >
                        <span
                          className={`font-semibold tracking-wide ${
                            isSelected ? "text-cyan-200" : "text-slate-400"
                          }`}
                        >
                          {item.label}
                        </span>
                        {isSelected && (
                          <Check className="text-cyan-400 w-5 h-5 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-8 bg-blue-900/20 border border-blue-500/30 rounded-2xl p-6 flex items-start gap-4 backdrop-blur-md">
                  <div className="bg-blue-500/20 p-2 rounded-full ring-1 ring-blue-400/30">
                    <Sparkles className="text-blue-400 w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h5 className="font-bold text-blue-200 mb-1 tracking-wide">
                      Did you know?
                    </h5>
                    <p className="text-blue-200/70 text-sm leading-relaxed">
                      Most awards are based on merit or financial need.
                      Affiliations are just extra bonuses! Don't worry if you
                      don't check any of these boxes.
                    </p>
                  </div>
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
              <ChevronLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />{" "}
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
              <span className="relative z-10 flex items-center gap-2 text-lg tracking-wide">
                Next Step{" "}
                <ChevronRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-sm py-3 px-8 rounded-lg shadow-lg shadow-cyan-500/20 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" />{" "}
                  <span className="animate-pulse">Analyzing...</span>
                </>
              ) : (
                <>
                  Find My Awards <Sparkles className="animate-pulse" />
                </>
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
