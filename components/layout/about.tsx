import { Container, Prose } from "@/components/craft";
import Image from "next/image";

export default function About() {
  return (
    <Container className="mt-0 mb-4">
      <Prose className="pb-8 text-center">
        <h2>About Richard</h2>
      </Prose>

      <Prose>
        <section className="about-section">
          <Image
            src="https://www.alfredorafael.com/wp-content/uploads/2026/09/Richard-Habersham-Circled.png"
            alt="Richard Habersham"
            width={200}
            height={200}
            className="circle-image w-38! h-38! sm:w-40! sm:h-40! md:w-48! md:h-48! lg:w-52! lg:h-52!"
          />
          <p>
            Habersham Real Estate and its team of professionals operate in
            Florida and New York. Richard is a luxury real estate broker with
            more than 20 years of experience across New York and Florida, with
            deep expertise in Manhattan residential, commercial, and new
            development sales. Richard Habersham has contributed to more than $3
            billion in new development sellouts and $150 million in direct
            residential transactions, working with institutional developers,
            sales teams, high-net-worth buyers, and sellers in complex,
            high-touch environments.
          </p>
          <p>
            His approach combines transactional experience with sophisticated
            market research and analysis, supported by graduate-level training
            in real estate development and a practical understanding of pricing,
            absorption, buyer psychology, and market positioning. He has also
            advised on major Manhattan rezoning and redevelopment initiatives,
            bringing a broader understanding of how neighborhoods evolve, how
            value is created, and how real estate fits within the life of a
            city.
          </p>
          <p>
            Richard's connection to Sarasota is equally personal and
            longstanding. He has spent winters in Sarasota since 2001 and has
            watched the city evolve for more than two decades—from the downtown
            waterfront and barrier islands to the growth of Sarasota's luxury
            residential and new-development markets. As a Florida-licensed real
            estate broker and Sarasota homeowner, Richard understands the key
            feeder markets driving Sarasota’s growth and knows how to help
            buyers see what makes the city so distinctive: a dynamic cultural
            life, exceptional natural beauty, and the scale, sophistication, and
            year-round energy to keep retirees and second- and third-home owners
            deeply engaged.
          </p>
        </section>
      </Prose>
    </Container>
  );
}
