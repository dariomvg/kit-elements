import { PropsExperience } from "../types";
import "../styles/Experience.css";

export const Experience = ({ experience }: PropsExperience): JSX.Element => {
  const { company, description, first_date, job_name, last_date, link, theme } =
    experience;

  return (
    <section className={`section-experience ${theme ? theme : ""}`}>
      <div className="container-line">
        <div className="circle"></div>
        <div className="line"></div>
      </div>
      <section className="container-information">
        <div className="box-info">
          <h2 className="job-name">{job_name}</h2>
          <p className="company">{company}</p>
          <p className="dates">
            <p>{first_date}</p>
            <b>-</b>
            <p>{last_date}</p>
          </p>
        </div>
        <div className="box-info last">
          <p className="description">{description}</p>
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className="link">
              Visitar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="icon-link"
                width={16}
                height={16}>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
