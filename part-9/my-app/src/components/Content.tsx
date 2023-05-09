import { CourseParts } from '../types';
const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Content = (props: CourseParts) => {
  props.courseParts.forEach(part => {
    switch (part.kind) {
      case 'basic':
        console.log(part.name, part.description, part.exerciseCount);
        break;
      case 'group':
        console.log(part.name, part.groupProjectCount, part.exerciseCount);
        break;
      case 'background':
        console.log(
          part.name,
          part.description,
          part.backroundMaterial,
          part.exerciseCount
        );
        break;
      default:
        return assertNever(part);
    }
  });

  return (
    <>
      <p>
        {props.courseParts[0].name} {props.courseParts[0].exerciseCount}
      </p>
      <p>
        {props.courseParts[1].name} {props.courseParts[1].exerciseCount}
      </p>
      <p>
        {props.courseParts[2].name} {props.courseParts[2].exerciseCount}
      </p>
    </>
  );
};

export default Content;
