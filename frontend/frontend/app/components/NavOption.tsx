

type OptionType={
    href: string;
    optionName: string;
}

type PropType={
    option:OptionType;
}

function NavOption({option}: PropType) {
  return (
    <a href={option.href} className="px-4 py-1 hover:bg-gray-700 hover:text-white transition rounded-full">
      {option.optionName}
    </a>
  )
}
export default NavOption;
