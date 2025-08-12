import { PropsExperience } from "../types";
import "../styles/Experience.css";

export const Experience = ({ experience }: PropsExperience) => {
  const { company, description, first_date, job_name, last_date, link, theme } =
    experience;

  return (
    <section className={`section-experience ${theme ? "theme-dark-experience" : ""}`}>
      <div className="container-line-experience">
        <div className="circle-experience"></div>
        <div className="line-experience"></div>
      </div>
      <section className="container-information-experience">
        <div className="box-info-experience">
          <h2 className="job-name-experience">{job_name}</h2>
          <p className="company-experience">{company}</p>
          <div className="dates-experience">
            <p>{first_date}</p>
            <b>-</b>
            <p>{last_date}</p>
          </div>
        </div>
        <div className="box-info-experience last-experience">
          <p className="description-experience">{description}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="link-experience">
              Visitar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="icon-link-experience"
                width={16}
                height={16}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          )}
        </div>
      </section>
    </section>
  );
};
