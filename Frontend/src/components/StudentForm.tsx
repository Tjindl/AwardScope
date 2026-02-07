import React, { useState } from "react";
import { StudentFormData } from "../types";

interface StudentFormProps {
  onSubmit: (data: StudentFormData) => void;
  loading: boolean;
}

const StudentForm: React.FC<StudentFormProps> = ({ onSubmit, loading }) => {
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
    affiliations: {},
  });

  const [showAffiliations, setShowAffiliations] = useState(false);

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

  const handleAffiliationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      affiliations: {
        ...prev.affiliations,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          UBC Financial Aid Finder
        </h2>
        <p className="text-gray-600 mb-6">
          Fill out this form to discover scholarships, bursaries, and financial
          aid opportunities you're eligible for.
        </p>

        {/* Academic Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
            Academic Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Campus *
              </label>
              <select
                name="campus"
                value={formData.campus}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Vancouver">Vancouver</option>
                <option value="Okanagan">Okanagan</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Year of Study *
              </label>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value={1}>1st Year</option>
                <option value={2}>2nd Year</option>
                <option value={3}>3rd Year</option>
                <option value={4}>4th Year</option>
                <option value={5}>5+ Year</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Faculty/Program
              </label>
              <select
                type="text"
                name="faculty"
                value={formData.faculty}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>value={1}Arts</option>
                <option>value={2}Science</option>
                <option>value={3}Engineering</option>
                <option>value={4}Forestry</option>
                <option>value={1}Medicine</option>
                <option>value={1}Dentistry</option>
                <option>value={1}Law</option>
                <option>value={1}Graduate Studies</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                GPA (0-4.33 scale)
              </label>
              <input
                type="number"
                name="gpa"
                value={formData.gpa || ""}
                onChange={handleChange}
                min="0"
                max="4.33"
                step="0.01"
                placeholder="e.g., 3.5"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Demographic Information */}
        <div className="space-y-4 mt-6">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
            Demographic Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Citizenship Status *
              </label>
              <select
                name="citizenshipStatus"
                value={formData.citizenshipStatus}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Canadian Citizen">Canadian Citizen</option>
                <option value="Permanent Resident">Permanent Resident</option>
                <option value="Refugee">Refugee</option>
                <option value="International">International Student</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Prefer not to say</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="indigenousStatus"
                checked={formData.indigenousStatus}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">
                I am an Indigenous student (First Nations, Métis, or Inuit)
              </span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="hasDisability"
                checked={formData.hasDisability}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">I have a disability</span>
            </label>
          </div>
        </div>

        {/* Financial Information */}
        <div className="space-y-4 mt-6">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
            Financial Information
          </h3>

          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="hasStudentLoan"
                checked={formData.hasStudentLoan}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">
                I have a full-time Canadian government student loan
              </span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="hasFinancialNeed"
                checked={formData.hasFinancialNeed}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">
                I have demonstrated financial need
              </span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="formerYouthInCare"
                checked={formData.formerYouthInCare || false}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">
                I am a former youth in care
              </span>
            </label>
          </div>
        </div>

        {/* Affiliations */}
        <div className="space-y-4 mt-6">
          <button
            type="button"
            onClick={() => setShowAffiliations(!showAffiliations)}
            className="text-lg font-semibold text-gray-800 border-b pb-2 w-full text-left flex justify-between items-center"
          >
            <span>Affiliations (Optional)</span>
            <span className="text-sm text-gray-500">
              {showAffiliations ? "▼" : "▶"}
            </span>
          </button>

          {showAffiliations && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="alphaGammaDelta"
                  checked={formData.affiliations.alphaGammaDelta || false}
                  onChange={handleAffiliationChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">
                  Alpha Gamma Delta member
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="canadianArmedForces"
                  checked={formData.affiliations.canadianArmedForces || false}
                  onChange={handleAffiliationChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">
                  Canadian Armed Forces (current/former/family)
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="chineseAncestry"
                  checked={formData.affiliations.chineseAncestry || false}
                  onChange={handleAffiliationChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Chinese ancestry</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="iranianHeritage"
                  checked={formData.affiliations.iranianHeritage || false}
                  onChange={handleAffiliationChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">
                  Persian/Iranian heritage
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="ilwu"
                  checked={formData.affiliations.ilwu || false}
                  onChange={handleAffiliationChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">
                  ILWU member/family
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="ufcw"
                  checked={formData.affiliations.ufcw || false}
                  onChange={handleAffiliationChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">
                  UFCW Local 1518 member/family
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="beemCreditUnion"
                  checked={formData.affiliations.beemCreditUnion || false}
                  onChange={handleAffiliationChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">
                  Beem Credit Union member/family
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="sikhCommunity"
                  checked={formData.affiliations.sikhCommunity || false}
                  onChange={handleAffiliationChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">
                  Sikh community member
                </span>
              </label>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading
              ? "Finding matches..."
              : "Find My Scholarships & Bursaries"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default StudentForm;
