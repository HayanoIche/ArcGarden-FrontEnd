export default function InfoCard(props: {
  icon?: string;
  title: string;
  text: string;
  className?: string;
  titleClassName?: string;
  textClassName?: string;
  iconClassName?: string;
}) {
  return (
    <div className={props.className}>
      {props.icon && <img src={props.icon} alt="" className={props.iconClassName} />}
      <h3 className={props.titleClassName}>{props.title}</h3>
      <p className={props.textClassName}>{props.text}</p>
    </div>
  );
}