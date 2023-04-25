"use client";

import Jobs from "../../common/shared/jobs";

function ExperiencesAndProjects() {
  function formatDate(date: string | null) {
    if (!date) return "Present";

    return Intl.DateTimeFormat("en-GB", {
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(date));
  }

  function countTimeOfWork(started: string, ended: string | null): string {
    const startedInDate = new Date(started);
    const endedInDate = ended ? new Date(ended) : new Date();

    const diffInMilliseconds = endedInDate.getTime() - startedInDate.getTime();
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 3600 * 24));

    const years = Math.floor(diffInDays / 365);
    const months = Math.floor((diffInDays % 365) / 30);
    const days = diffInDays - years * 365 - months * 30;

    const parts = [];
    if (years > 0) {
      const plural = years > 1 ? "s" : "";
      parts.push(`${years} year${plural}`);
    }
    if (months > 0) {
      const plural = months > 1 ? "s" : "";
      parts.push(`${months} month${plural}`);
    }
    if (days > 0) {
      const plural = days > 1 ? "s" : "";
      parts.push(`${days} day${plural}`);
    }

    return parts.join(", ");
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl">
        <b>Experiences And Projects</b>
      </h2>

      <div>
        {Jobs.map((job) => {
          let time = countTimeOfWork(job.startedAt, job.endedAt ?? null);
          let startedAt = formatDate(job.startedAt);
          let endedAt = formatDate(job.endedAt ?? null);

          return (
            <div key={`${job.companyName}-${job.startedAt}`}>
              <div className="flex flex-row items-center gap-4">
                <div className="bg-white h-5 w-5 rounded-full" />
                <span className="text-2xl">{job.companyName}</span>
              </div>

              <div className="flex flex-col border-l-2 min-h-[60px] ml-2 pl-7 py-2 gap-2">
                <section>
                  <p>
                    {job.location} - {job.locationMethod}
                  </p>
                  <p>
                    {startedAt} - {endedAt} ({time})
                  </p>
                  <p>
                    {job.role} - {job.contractType}
                  </p>
                </section>

                <section>
                  <p>{job.description}</p>
                </section>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExperiencesAndProjects;
