import useButton  from '../hooks/useButton';

export default function BtnHook(): JSX.Element {
  const button = useButton();
  const newButton = useButton();

  return (
    <div>
      <button className="btn default-button" onClick={button.handleClick}>
        Custom Hook<br />
        {button.status ? 'Active' : 'Inactive'} : {button.cnt}
      </button>
      <button className="btn default-button" onClick={newButton.handleClick}>
        Custom Hook<br />
        {newButton.status ? 'Active' : 'Inactive'} : {newButton.cnt}
      </button>      
    </div>
  );
}
