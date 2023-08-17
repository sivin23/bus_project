import './ControlButton.css'

function ControlButton({controlButtons}) {
  return (
    <>
    <ul className="nav nav-pills">
        {
          controlButtons.map(Item => (
            <li class="nav-item">
              <button className={`nav-link ${Item.activeState? "control-btn-active":" " } control-btn`} aria-current="page">{Item.title}</button>
            </li>
          ))
        }
        </ul>
    </>
  )
}

export default ControlButton