import HeroVideo from "@/components/heroVideo";
import Services from "@/components/layout/services";
import About from "@/components/layout/about";
import Projects from "@/components/layout/projects";
import Ribbon from "@/components/layout/ribbon";
import { ContactForm } from "@/components/contactForm";
import { contactDetails } from "./data";
import { TestimonialsCarousel } from "@/components/testimonialsCarousel";
import { testimonialsArray } from "./data";
import { Container } from "@/components/craft";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <main>
        <div style={{ marginTop: "-2rem", zIndex: "10", position: "relative" }}>
          <Services />
        </div>
        <About />
        <div className="max-w-[75%] mx-auto">
          <hr />
        </div>
        {/* <Projects /> */}
        <Ribbon
          ribbonText="Lorem Ipsum Text Goes Here"
          ribbonImage="https://www.alfredorafael.com/wp-content/uploads/2026/09/sarasota-ribbon-e1789149843923.jpg"
        />
        {/* <div className="mb-16">
          <p className="text-center mt-16 mb-8 text-3xl font-semibold">
            What Our Clients Say
          </p>
          <TestimonialsCarousel testimonials={testimonialsArray} />
        </div> */}
        <div id="contact">
          <p className="text-center mt-8 text-3xl font-semibold">
            Get in Touch
          </p>
          <Container className="rounded-lg bg-card p-8 mt-2 flex flex-col lg:flex-row gap-10 lg:gap-20">
            <ContactForm />
            <div className="space-y-6 md:mx-auto max-w-6xl">
              <h2 className="mb-6 text-balance text-2xl font-bold tracking-tight text-card-foreground">
                Contact Information
              </h2>
              {contactDetails.map((detail: any) => {
                const Icon = detail.icon;
                const content = (
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground">
                        {detail.label}
                      </p>
                      <p className="mt-1 whitespace-pre-line text-base font-medium leading-relaxed text-card-foreground">
                        <span className="w-[300px] block">{detail.value}</span>
                      </p>
                    </div>
                  </div>
                );

                if (detail.href) {
                  return (
                    <a
                      key={detail.label}
                      href={detail.href}
                      className="block rounded-lg transition-colors hover:bg-muted/50"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div key={detail.label} className="rounded-lg">
                    {content}
                  </div>
                );
              })}
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}
