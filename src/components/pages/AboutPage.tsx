import { SectionAbout, SectionCompetences, SectionParcours } from "../sections/about/SectionsAbout";

function AboutPage() {
  return (
    <>
      <section className="flex flex-col dark:bg-gray-900">
        <div className="lg:pb-16 pb-8 px-4 lg:px-16 pt-20 lg:pt-26  bg-violet-100">
          <SectionAbout />
        </div>

        <div className="bg-white lg:py-16 py-8 px-4 lg:px-16">
          <SectionCompetences />
        </div>

        <div className="bg-violet-100 lg:py-16 py-8 px-4 lg:px-16">
          <SectionParcours />
        </div>

      </section>
    </>
  );
}
export default AboutPage;
