

type OptionType={
    href: string;
    optionName: string;
}

type PropType={
    option:OptionType;
}

function NavOption({option}: PropType) {
  return (
    <a href={option.href} className="px-4 py-1 font-semibold hover:text-nav-hover-text hover:scale-105 transition rounded-full">
      {option.optionName}
    </a>
  )
}
export default NavOption;
