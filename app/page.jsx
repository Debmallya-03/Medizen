import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import Link from "next/link";
import { Activity, ArrowRight, Clock, Heart, Pill, Plus, Shield, Stethoscope, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { creditBenefits, features, testimonials } from "@/lib/data";
import Pricing from "@/components/pricing";

export default function Home() {
  return <div className="bg-black" >
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
        <div className="absolute top-2/3 right-1/4 animate-float-heart-3">
          <Heart className="w-7 h-7 text-red-500/45 animate-heartbeat-fast" />
        </div>

        {/* Floating pills with rotation */}
        <div className="absolute top-60 left-1/4 animate-float-pill-1">
          <Pill className="w-10 h-10 text-red-400/35 animate-wobble" />
        </div>
        <div className="absolute bottom-40 right-1/3 animate-float-pill-2">
          <Pill className="w-7 h-7 text-red-500/30 animate-swing" />
        </div>

        {/* Floating stethoscopes */}
        <div className="absolute top-80 right-1/4 animate-float-steth-1">
          <Stethoscope className="w-8 h-8 text-red-500/40 animate-pendulum" />
        </div>
        <div className="absolute bottom-20 left-1/3 animate-float-steth-2">
          <Activity className="w-10 h-10 text-red-600/35 animate-wave" />
        </div>

        {/* Additional medical icons */}
        <div className="absolute top-1/2 left-5 animate-float-misc-1">
          <Zap className="w-6 h-6 text-red-400/40 animate-electric" />
        </div>
        <div className="absolute top-1/3 right-5 animate-float-misc-2">
          <Shield className="w-8 h-8 text-red-500/35 animate-shield-glow" />
        </div>
        <div className="absolute bottom-1/3 left-1/2 animate-float-misc-3">
          <Clock className="w-7 h-7 text-red-600/30 animate-tick" />
        </div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 animate-particle-1">
          <div className="w-2 h-2 bg-red-500/50 rounded-full animate-twinkle" />
        </div>
        <div className="absolute top-3/4 right-1/4 animate-particle-2">
          <div className="w-3 h-3 bg-red-400/40 rounded-full animate-glow-pulse" />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-particle-3">
          <div className="w-1.5 h-1.5 bg-red-600/60 rounded-full animate-sparkle" />
        </div>
      </div>

      <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
  <div className="text-center space-y-8 px-4 mx-auto">
    {/* <Badge
      variant="outline"
      className="bg-red-900/30 border-red-700/30 px-4 py-2 text-red-400 text-sm font-medium"
    >
      Healthcare made simple
    </Badge> */}

    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight whitespace-nowrap ml-2">
        Your Health <span className="gradient-title">Our Priority</span>
    </h1>

    <div className="relative w-50 h-24 mx-auto rounded-xl overflow-hidden ml-105">
  <Image
    src="/heartbeat.gif"
    alt="Doctor consultation"
    fill
    priority
    className="object-cover rounded-xl"
  />
</div>


    <p className="text-muted-foreground text-lg md:text-xl">
      Book appointments, consult via video, and manage your healthcare journey
      all in one secure platform.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
      <Button
        asChild
        size="lg"
        className="bg-red-600 text-white hover:bg-red-700"
      >
        <Link href="/onboarding">
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>

      <Button
        asChild
        variant="outline"
        size="lg"
        className="border-emerald-700/30 hover:bg-muted/80"
      >
        <Link href="/doctors">Find Doctors</Link>
      </Button>
    </div>
  </div>
</section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform makes healthcare accessible with just a few clicks
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card border-red-900/20 hover:border-red-800/40 transition-all duration-300"
              >
                <CardHeader className="pb-2">
                  <div className="bg-red-900/20 p-3 rounded-lg w-fit mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          </div>
      </section>

      <section id="pricing" className="py-20">
         <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-red-900/30 border-red-700/30 px-4 py-1 text-red-400 text-sm font-medium mb-4"
            >
              Affordable Healthcare
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Consultation Packages
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the perfect consultation package that fits your healthcare
              needs
            </p>
          </div>
          <div className="mx-auto">
            <Pricing/>
            
            <Card className="mt-12 bg-muted/20 border-red-900/30">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white flex items-center">
                  <Stethoscope className="h-5 w-5 mr-2 text-red-400" />
                  How Our Credit System Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {creditBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1 bg-red-900/20 p-1 rounded-full">
                        <svg
                          className="h-4 w-4 text-red-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <p
                        className="text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: benefit }}
                      />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          </div>
      </section>

      <section className="py-20 bg-muted/30">
         <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-red-900/30 border-red-700/30 px-4 py-1 text-red-400 text-sm font-medium mb-4"
            >
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from patients and doctors who use our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-red-900/20 hover:border-red-800/40 transition-all"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-900/20 flex items-center justify-center mr-4">
                      <span className="text-red-400 font-bold">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-red-900/30 to-red-950/20 border-red-800/20">
            <CardContent className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div className="max-w-2xl relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to take control of your healthcare?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join thousands of users who have simplified their healthcare
                  journey with our platform. Get started today and experience
                  healthcare the way it should be.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-red-600 text-white hover:bg-red-700"
                  >
                    <Link href="/sign-up">Sign Up Now</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-red-700/30 hover:bg-muted/80"
                  >
                    <Link href="#pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>

              {/* Decorative healthcare elements */}
              <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-red-800/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="absolute left-0 bottom-0 w-[200px] h-[200px] bg-red-700/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  
}

