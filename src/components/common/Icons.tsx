import Image from 'next/image';
import { AiOutlineFileSearch, AiOutlineLogin } from 'react-icons/ai';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { GoDownload } from 'react-icons/go';
import { IoMdTime } from 'react-icons/io';
import { MdOutlineCreateNewFolder } from 'react-icons/md';
import { PiCursorClick } from 'react-icons/pi';

export type IconKeys = keyof typeof icons;

type IconsType = {
  [key in IconKeys]: React.ElementType;
};

const icons = {
  blank: () => {
    return <></>;
  },
  kakao: () => {
    return <Image src="/kakao.svg" width={20} height={20} alt="Kakao" />;
  },

  // Features
  login: AiOutlineLogin,
  create: MdOutlineCreateNewFolder,
  downLoad: GoDownload,

  // Mode Toggle
  moon: BsMoonStars,
  sun: BsSun,

  // Common
  time: IoMdTime,
  fileSearch: AiOutlineFileSearch,
  cursorClick: PiCursorClick,
};

export const Icons: IconsType = icons;
