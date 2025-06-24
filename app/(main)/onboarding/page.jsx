"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Clock, Heart, Loader2, Pill, Plus, Shield, Stethoscope, User, Zap } from "lucide-react";
import useFetch from "@/hooks/use-fetch";
import { useRouter } from "next/navigation";
import { setUserRole } from "@/actions/onboarding";
import { useEffect } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SPECIALTIES } from "@/lib/specialities";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const doctorFormSchema = z.object({
  specialty: z.string().min(1, "Speciality is required"),
  experience: z.number()
    .min(1, "Experience must be at least 1 year")
    .max(70, "Experience must be less than 70 years"),
  credentialUrl: z.string()
    .url("Please enter a valid URL")
    .min(1, "Credential URL is required"),
    description: z.string()
    .min(20, "Description must be at least 20 characters")
    .max(1000, "Description cannot exceed 1000 characters"),
  
});

const OnboardingPage = () => {
    const [step, setStep] = useState("choose-role");
    const router = useRouter();

    const { loading, data, fn: submitUserRole } = useFetch(setUserRole);

    
  // React Hook Form setup with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(doctorFormSchema),
    defaultValues: {
      specialty: "",
      experience: undefined,
      credentialUrl: "",
      description: "",
    },
  });

   // Watch specialty value for controlled select component
  const specialtyValue = watch("specialty");

  const handlePatientSelection = async () => {
    if (loading) return;

    const formData = new FormData();
    formData.append("role", "PATIENT");

    await submitUserRole(formData);
  };

   useEffect(() => {
    if (data && data?.success) {
      router.push(data.redirect);
    }
  }, [data]);

 // Added missing onDoctorSubmit function
  const onDoctorSubmit = async (data) => {
    if (loading) return;

    const formData = new FormData();
    formData.append("role", "DOCTOR");
    formData.append("specialty", data.specialty);
    formData.append("experience", data.experience.toString());
    formData.append("credentialUrl", data.credentialUrl);
    formData.append("description", data.description);

    await submitUserRole(formData);
  };
 



  if (step === "choose-role"){
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Enhanced floating medical elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating crosses with complex animations */}
        <div className="absolute top-20 left-10 animate-float-complex-1">
          <Plus className="w-8 h-8 text-red-500/40 animate-pulse-slow" />
        </div>
        <div className="absolute top-40 right-20 animate-float-complex-2">
          <Plus className="w-6 h-6 text-red-600/50 animate-rotate-slow" />
        </div>
        <div className="absolute bottom-32 left-16 animate-float-complex-3">
          <Plus className="w-10 h-10 text-red-400/30 animate-scale-pulse" />
        </div>

        {/* Floating hearts with heartbeat animations */}
        <div className="absolute top-32 right-10 animate-float-heart-1">
          <Heart className="w-9 h-9 text-red-600/40 animate-heartbeat-complex" />
        </div>
        <div className="absolute bottom-60 left-20 animate-float-heart-2">
          <Heart className="w-6 h-6 text-red-400/35 animate-heartbeat-delayed" />
        </div>
        {/* <div className="absolute top-2/3 right-1/4 animate-float-heart-3">
          <Heart className="w-7 h-7 text-red-500/45 animate-heartbeat-fast" />
        </div> */}

        {/* Floating pills with rotation */}
        {/* <div className="absolute top-60 left-1/4 animate-float-pill-1">
          <Pill className="w-10 h-10 text-red-400/35 animate-wobble" />
        </div>
        <div className="absolute bottom-40 right-1/3 animate-float-pill-2">
          <Pill className="w-7 h-7 text-red-500/30 animate-swing" />
        </div> */}

        {/* Floating stethoscopes */}
        <div className="absolute top-80 right-1/7 animate-float-steth-1">
          <Stethoscope className="w-8 h-8 text-red-500/40 animate-pendulum" />
        </div>
        <div className="absolute bottom-10 left-1/4 animate-float-steth-2">
          <Activity className="w-10 h-10 text-red-600/35 animate-wave" />
        </div>

        {/* Additional medical icons */}
        {/* <div className="absolute top-1/2 left-5 animate-float-misc-1">
          <Zap className="w-6 h-6 text-red-400/40 animate-electric" />
        </div>
        <div className="absolute top-1/3 right-5 animate-float-misc-2">
          <Shield className="w-8 h-8 text-red-500/35 animate-shield-glow" />
        </div>
        <div className="absolute bottom-1/3 left-1/2 animate-float-misc-3">
          <Clock className="w-7 h-7 text-red-600/30 animate-tick" />
        </div> */}

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 animate-particle-1">
          <div className="w-2 h-2 bg-red-500/50 rounded-full animate-twinkle" />
        </div>
        <div className="absolute top-3/4 right-1/4 animate-particle-2">
          <div className="w-3 h-3 bg-red-400/40 rounded-full animate-glow-pulse" />
        </div>
        {/* <div className="absolute top-1/2 right-1/3 animate-particle-3">
          <div className="w-1.5 h-1.5 bg-red-600/60 rounded-full animate-sparkle" />
        </div> */}
      </div>
      <Card className="border-red-900/20 hover:border-red-700/40 cursor-pointer transition-all" 
            onClick={() => !loading && handlePatientSelection()}>                 
        <CardContent className="pt-6 pb-6 flex flex-col items-center text-center">
          <div className="p-4 bg-red-900/20 rounded-full mb-4">
              <User className="h-8 w-8 text-red-400" />
          </div>
          <CardTitle className="text-xl font-semibold text-white mb-2">Join as a Patient</CardTitle>
          <CardDescription className="mb-4">
            Book appointments, consult with doctors, and manage your
            healthcare journey
          </CardDescription>
          <Button className="w-full mt-2 bg-red-600 hover:bg-red-700" disabled={loading}>
             {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Continue as Patient"
              )}
          </Button>
        </CardContent>
      </Card>

      <Card
           className="border-red-900/20 hover:border-red-700/40 cursor-pointer transition-all"
           onClick={() => !loading && setStep("doctor-form")}
          
        >
          <CardContent className="pt-6 pb-6 flex flex-col items-center text-center">
            <div className="p-4 bg-red-900/20 rounded-full mb-4">
              <Stethoscope className="h-8 w-8 text-red-400" />
            </div>
            <CardTitle className="text-xl font-semibold text-white mb-2">
              Join as a Doctor
            </CardTitle>
            <CardDescription className="mb-4">
              Create your professional profile, set your availability, and
              provide consultations
            </CardDescription>
            <Button
              className="w-full mt-2 bg-red-600 hover:bg-red-700"
              disabled={loading}
            >
              Continue as Doctor
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

   // Doctor registration form
  if (step === "doctor-form") {
    return (
      <Card className="border-red-900/20">
        <CardContent className="pt-6">
          <div className="mb-6">
            <CardTitle className="text-2xl font-bold text-white mb-2">
              Complete Your Doctor Profile
            </CardTitle>
            <CardDescription>
              Please provide your professional details for verification
            </CardDescription>
          </div>

          <form onSubmit={handleSubmit(onDoctorSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="specialty">Medical Specialty</Label>
              <Select
                value={specialtyValue}
                onValueChange={(value) => setValue("specialty", value)}
              >
                <SelectTrigger id="specialty">
                  <SelectValue placeholder="Select your specialty" />
                </SelectTrigger>
                <SelectContent>
                  {SPECIALTIES.map((spec) => (
                    <SelectItem
                      key={spec.name}
                      value={spec.name}
                      className="flex items-center gap-2"
                    >
                      <span className="text-red-400">{spec.icon}</span>
                      {spec.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.specialty && (
                <p className="text-sm font-medium text-red-500 mt-1">
                  {errors.specialty.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Input
                id="experience"
                type="number"
                placeholder="e.g. 5"
                {...register("experience", { valueAsNumber: true })}
              />
              {errors.experience && (
                <p className="text-sm font-medium text-red-500 mt-1">
                  {errors.experience.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="credentialUrl">Link to Credential Document</Label>
              <Input
                id="credentialUrl"
                type="url"
                placeholder="https://example.com/my-medical-degree.pdf"
                {...register("credentialUrl")}
              />
              {errors.credentialUrl && (
                <p className="text-sm font-medium text-red-500 mt-1">
                  {errors.credentialUrl.message}
                </p>
              )}
              <p className="text-sm text-muted-foreground">
                Please provide a link to your medical degree or certification
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description of Your Services</Label>
              <Textarea
                id="description"
                placeholder="Describe your expertise, services, and approach to patient care..."
                rows="4"
                {...register("description")}
              />
              {errors.description && (
                <p className="text-sm font-medium text-red-500 mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep("choose-role")}
                className="border-red-900/30"
                disabled={loading}
              >
                Back
              </Button>
              <Button
                type="submit"
                className="bg-red-600 hover:bg-red-700"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit for Verification"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    );
  }
}

export default OnboardingPage;