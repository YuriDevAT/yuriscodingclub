import Head from 'next/head';
import Image from 'next/image';

export const siteTitle = 'About Yuris Coding Club';

const About = () => {

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>About This Website</h1>
      <p> This website is for anyone who wants to set foot into tech by becoming a Frontend Developer with strong focus on accessibility and gain insight from a self-taught developer who was in the same position not too long ago.
      </p>
      <h2>Why accessibility?</h2>
      <p>In the next few years there will be a strong demand on accessibility designer, developers and testers, because the law is getting more strict. LinkedIn even added accessibility to their job titles not too long ago.</p>
      <p>Read more about it in my blog post:{'     '}
        <a className="linked-tag" href="https://dev.to/yuridevat/why-to-focus-on-accessibility-10hp">Why To Focus On Accessibility
        </a>
      </p>

      <h2>
        A road map for everyone 👥
      </h2>
      <p>I divide the journey into three phases, as I have experienced it myself.</p>

      <section className="cards">
        <article className="card card-one">
          <a href="https://www.yuriscodingclub.com/get-into-coding">
            <h3>Phase 1 <br />
              <span>Get into coding</span>
            </h3>
            <p>
              Especially for <b>beginners</b>, it&apos;s often not easy to not lose track, stay consistent, and know what matters. It&apos;s too easy to get overwhelmed by too much information. That&apos;s why I&apos;ve made a lot of notes along my journey about how I would like to have taken the path as a developer if I were starting over.
            </p>
          </a>
        </article>
        <article className="card card-two">
          <a href="https://www.yuriscodingclub.com/create-a-portfolio">
            <h3>Phase 2 <br />
              <span>Create a portfolio</span>
            </h3>
            <p>
              Somewhat more <b>experienced developers</b> often wonder what projects to put on their resume, how to develop ideas, and what it would be like to work on a team or on a real project at a company. I will outline these paths as best I can.
            </p>
          </a>
        </article>
        <article className="card card-three">
          <a href="https://www.yuriscodingclub.com/get-a-job">
            <h3>Phase 3 <br />
              <span>Get a job</span>
            </h3>
            <p>
              <b>Job-ready developers</b> often wonder when looking for a job if their CV, GitHub profile and LinkedIn profile will be well received and if their projects are ready to be shown. This phase is meant to make sure that everything is thought of before applying.
            </p>
          </a>
        </article>
      </section>


      {/* <h3>Phase 1: Get into coding</h3>
      <p>Especially for <b>beginners</b>, it&apos;s often not easy to not lose track, stay consistent, and know what matters. It&apos;s too easy to get overwhelmed by too much information. That&apos;s why I&apos;ve made a lot of notes along my journey about how I would like to have taken the path as a developer if I were starting over.
      </p>
      <h3>Phase 2: Create a portfolio</h3>
      <p>Somewhat more <b>experienced developers</b> often wonder what projects to put on their resume, how to develop ideas, and what it would be like to work on a team or on a real project at a company. I will outline these paths as best I can.
      </p>
      <h3>Phase 3: Get a job</h3>
      <p><b>Job-ready developers</b> often wonder when looking for a job if their CV, GitHub profile and LinkedIn profile will be well received and if their projects are ready to be shown. This phase is meant to make sure that everything is thought of before applying.
      </p> */}
      <section className="about-me">
        <h2>Who am I 👩‍💻</h2>
        <a href="https://github.com/YuriDevAT" className="profile-img" >
          <Image src="https://github.com/yuridevat.png" alt="Julia Undeutsch's GitHub profile" width={150} height={150} />
        </a>
        <p>
          My name is Julia and I&apos;m a self-taught developer who switched careers in my early 30s after studying Musicology and Japanese Studies while working at a Casino.<br />
          After a full year of hard learning I started looking for a job and found one right away.
          That year was not easy, many ups and downs, so much to learn, but I never gave up and all the work finally paid off. <br />
          I learned a lot throughout this year about how to create a good CV, LinkedIn profile, and GitHub profile, how to pimp my portfolio and prepare for interviews in order to get a job.<br />
          But these things needed time. Time I want to spare you by sharing my knowledge with you.
          I&apos;m looking forward to helping you on your journey to becoming a developer.
        </p>
      </section>
      <h2>Get in touch 📧</h2>
      <p>
        You can always contact me if you have any questions. I would also be very happy if you share your success stories with me.
        Email me at <a href="mailto:yuridevat@gmail.com">yuridevat@gmail.com</a>.
      </p>
    </>
  )
};

export default About;