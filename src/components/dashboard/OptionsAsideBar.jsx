/* eslint-disable react/prop-types */
export const OptionsAsideBar = ({ link, className, iconName, title }) => {
  return (
    <>
      <a href={link} className={className}>
        <span className="material-icons-sharp"> {iconName} </span>
        <h3>{title}</h3>
      </a>
    </>
  );
};
