import Image from 'next/image';
import { AiOutlineClose, AiOutlineEllipsis, AiOutlineLogin, AiOutlinePlus, AiOutlineWarning } from 'react-icons/ai';
import { BiCalendar, BiHistory } from 'react-icons/bi';
import {
  BsCheck2,
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
  BsChevronUp,
  BsFire,
  BsMoonStars,
  BsSun,
} from 'react-icons/bs';
import { FaSort, FaUserAlt } from 'react-icons/fa';
import { GoDownload } from 'react-icons/go';
import { ImSpinner8, ImStatsBars } from 'react-icons/im';
import { MdDeleteForever, MdOutlineCreateNewFolder, MdOutlineLogout } from 'react-icons/md';
import { RxMixerHorizontal } from 'react-icons/rx';

export type IconKeys = keyof typeof icons;

type IconsType = {
  [key in IconKeys]: React.ElementType;
};

// TODO 확인 필요
// ** Custom svg or images can be used as icons by returning a JSX **
const icons = {
  // Custom icons
  blank: () => {
    return <></>;
  },
  featcard1: () => {
    return (
      <Image
        src="/featcard1.svg"
        className="dark:brightness-0 dark:invert-[1]"
        width={100}
        height={100}
        alt="Card image 1"
      />
    );
  },
  featcard2: () => {
    return (
      <Image
        src="/featcard2.svg"
        className="dark:brightness-0 dark:invert-[1]"
        width={100}
        height={100}
        alt="Card image 2"
      />
    );
  },
  featcard3: () => {
    return (
      <Image
        src="/featcard3.svg"
        className="dark:brightness-0 dark:invert-[1]"
        width={100}
        height={100}
        alt="Card image 3"
      />
    );
  },

  // Features
  login: AiOutlineLogin,
  create: MdOutlineCreateNewFolder,
  downLoad: GoDownload,

  // Mode Toggle
  moon: BsMoonStars,
  sun: BsSun,

  // Navigation
  back: BsChevronLeft,
  next: BsChevronRight,
  up: BsChevronUp,
  down: BsChevronDown,
  close: AiOutlineClose,

  // Common
  trash: MdDeleteForever,
  spinner: ImSpinner8,
  userAlt: FaUserAlt,
  ellipsis: AiOutlineEllipsis,
  warning: AiOutlineWarning,
  add: AiOutlinePlus,
  history: BiHistory,
  signout: MdOutlineLogout,
  calendar: BiCalendar,
  sort: FaSort,
  fire: BsFire,
  statsBar: ImStatsBars,
  mixer: RxMixerHorizontal,
  check: BsCheck2,
};

export const Icons: IconsType = icons;
