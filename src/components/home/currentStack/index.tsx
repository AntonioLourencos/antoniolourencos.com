// Utils
import Skills from "../../../common/shared/skills";

function CurrentStack() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl">
        <b>Current Stack</b>
      </h2>

      <div className="flex flex-wrap gap-4">
        {Skills.map((skill) => {
          return (
            <span key={skill} className="px-4 py-2 rounded-full bg-stone-900">
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default CurrentStack;
