"use client";
import { APISendPartnerRequest } from "@/api/partnerRequest";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

// Mock data for selects
const PARCEL_COUNT_OPTIONS = [
  { label: "1 to 10", value: "1-10" },
  { label: "10 to 20", value: "10-20" },
  { label: "20 to 30", value: "20-30" },
  { label: "more than 30", value: "30+" },
];

const SHIPMENT_TYPE_OPTIONS = [
  { value: "domestic", label: "Domestic" },
  { value: "international", label: "International" },
  { value: "mix", label: "A mix of boxes" },
];

const inputClass = "w-full bg-white border outline-none rounded-xl px-4 py-3 text-sm font-medium transition placeholder-gray-400 focus:ring-2 focus:ring-orange-200";

const PartnerForm = () => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ type: '', message: '' });
  const router = useRouter();
  const recaptchaRef = useRef(null);

  const {
    control,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
    setValue,
    setError,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      contactNo: "",
      panVatNo: "",
      businessRegNo: "",
      location: "",
      reference: "",
      parcelCount: "",
      shipmentType: "",
      recaptchaToken: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setNotification({ type: '', message: '' });

    try {
      if (!data.recaptchaToken) {
        setError("recaptchaToken", {
          message: "Please complete the reCAPTCHA.",
        });
        setNotification({ type: 'error', message: 'Please complete the reCAPTCHA.' });
        setLoading(false);
        return;
      }

      const res = await APISendPartnerRequest(data);
      if (router && router.back) router.back();
      // Use fallback notification since we router.back(), but set it just in case.
      setNotification({ type: 'success', message: 'Corporate partner request has been sent, we will contact you soon!' });
      
    } catch (error) {
      setNotification({ type: 'error', message: error?.message || error || "Something went wrong." });
    } finally {
      setLoading(false);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    }
  };

  const FormTitle = ({ isRequired, title }) => (
    <p className="mb-1 font-medium text-gray-700 text-sm">
      {title} {isRequired && <span className="text-red-500">*</span>}
    </p>
  );

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-lg mt-10 shadow-md">
      <h1 className="text-xl font-bold text-gray-800 mb-4 pb-1 border-b">
        Partner Registration
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        {notification.message && (
          <div className={`p-4 rounded-xl text-sm font-bold ${notification.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
            {notification.message}
          </div>
        )}

        <div>
          <FormTitle isRequired title="Full Name" />
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <div>
                <input
                  {...field}
                  type="text"
                  className={`${inputClass} ${errors.name ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'}`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
            )}
          />
        </div>

        <div>
          <FormTitle isRequired title="Email Address" />
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <div>
                <input
                  {...field}
                  type="email"
                  className={`${inputClass} ${errors.email ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'}`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <FormTitle isRequired title="Contact Number" />
            <Controller
              name="contactNo"
              control={control}
              rules={{ required: "Contact Number is required" }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="tel"
                    className={`${inputClass} ${errors.contactNo ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'}`}
                    placeholder="+1 234 567 8900"
                  />
                  {errors.contactNo && <p className="text-red-500 text-xs mt-1">{errors.contactNo.message}</p>}
                </div>
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <FormTitle title="PAN/VAT Number" />
            <Controller
              name="panVatNo"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className={`${inputClass} border-gray-200 focus:border-orange-500`}
                  placeholder="ABCDE1234F"
                />
              )}
            />
          </div>

          <div>
            <FormTitle title="Business Registration No" />
            <Controller
              name="businessRegNo"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className={`${inputClass} border-gray-200 focus:border-orange-500`}
                  placeholder="Registration number"
                />
              )}
            />
          </div>
        </div>

        <div>
          <FormTitle isRequired title="Location" />
          <Controller
            name="location"
            control={control}
            rules={{ required: "Location is required" }}
            render={({ field }) => (
              <div>
                <input
                  {...field}
                  type="text"
                  className={`${inputClass} ${errors.location ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'}`}
                  placeholder="City, Country"
                />
                {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
              </div>
            )}
          />
        </div>

        <div>
          <FormTitle title="Reference" />
          <Controller
            name="reference"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className={`${inputClass} border-gray-200 focus:border-orange-500`}
                placeholder="From whom you heard about us?"
              />
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <FormTitle isRequired title="Parcel Count (per week)" />
            <Controller
              name="parcelCount"
              control={control}
              rules={{ required: "Parcel count is required" }}
              render={({ field }) => (
                <div>
                  <select
                    {...field}
                    className={`${inputClass} text-gray-600 ${errors.parcelCount ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'}`}
                  >
                    <option value="">Select Volume</option>
                    {PARCEL_COUNT_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                  </select>
                  {errors.parcelCount && <p className="text-red-500 text-xs mt-1">{errors.parcelCount.message}</p>}
                </div>
              )}
            />
          </div>

          <div>
            <FormTitle isRequired title="Shipment Type" />
            <Controller
              name="shipmentType"
              control={control}
              rules={{ required: "Shipment type is required" }}
              render={({ field }) => (
                <div>
                  <select
                    {...field}
                    className={`${inputClass} text-gray-600 ${errors.shipmentType ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'}`}
                  >
                    <option value="">Select Shipment Type</option>
                    {SHIPMENT_TYPE_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                  </select>
                  {errors.shipmentType && <p className="text-red-500 text-xs mt-1">{errors.shipmentType.message}</p>}
                </div>
              )}
            />
          </div>
        </div>

        <div>
          <FormTitle isRequired title="reCAPTCHA" />
          <Controller
            name="recaptchaToken"
            control={control}
            rules={{ required: "Please complete the reCAPTCHA." }}
            render={({ field }) => (
              <div className="flex flex-col">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LfidWErAAAAAI7smZBE-ETWWUOH5L4dyuQmzz1P"
                  onChange={(token) => {
                    setValue("recaptchaToken", token || "");
                  }}
                  onExpired={() => {
                    setValue("recaptchaToken", "");
                    setError("recaptchaToken", {
                      message: "reCAPTCHA expired. Please try again.",
                    });
                  }}
                />
                {errors.recaptchaToken && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.recaptchaToken.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-orange-500/30 flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
             <><i className="fa-solid fa-spinner animate-spin mr-2"></i> Processing...</>
            ) : "Register Partner"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PartnerForm;
