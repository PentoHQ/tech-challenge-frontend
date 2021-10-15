import loader from '../../images/loader.svg'
import './index.scss'

export default function Loader() {
  return (
    <div className="loader-wrapper">
      <img src={loader} alt="loading.." />
    </div>
  )
}
