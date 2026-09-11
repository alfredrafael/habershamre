import { Container, Prose } from "@/components/craft";
import Image from "next/image";

export default function About() {
  return (
    <Container className="mt-0 mb-4">
      <Prose className="pb-8 text-center">
        <h2>Lorem Ipsum</h2>
      </Prose>

      <Prose>
        <section className="about-section">
          <Image
            src="https://www.alfredorafael.com/wp-content/uploads/2026/09/Richard-Habersham-Circled.png"
            alt="Dean Corsaro"
            width={200}
            height={200}
            className="circle-image w-38! h-38! sm:w-40! sm:h-40! md:w-48! md:h-48! lg:w-52! lg:h-52!"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            libero tempore at ex laboriosam alias culpa voluptatibus nihil
            molestias suscipit, reiciendis veritatis in facilis, voluptas
            impedit nostrum officia optio! Tenetur?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            libero tempore at ex laboriosam alias culpa voluptatibus nihil
            molestias suscipit, reiciendis veritatis in facilis, voluptas
            impedit nostrum officia optio! Tenetur?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            libero tempore at ex laboriosam alias culpa voluptatibus nihil
            molestias suscipit, reiciendis veritatis in facilis, voluptas
            impedit nostrum officia optio! Tenetur?
          </p>
        </section>
      </Prose>
    </Container>
  );
}
