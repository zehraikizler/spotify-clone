import { Icon } from "./../../Icons";

export default function DownloadApp() {
  return (
    <a href="#" className='h-10 flex flex-shrink-0 ntext-sm font-semibold text-link hover:text-white items-center gap-x-4 px-6'>
        <Icon name="download" size={20} />
        Uygulamayı Yükle
    </a>
  )
}
