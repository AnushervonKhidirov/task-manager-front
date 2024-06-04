type multipleClassesArgs = { classes?: string[]; active?: { isActive: boolean; activeClass: string } }

export default function multipleClasses({ classes = [], active }: multipleClassesArgs): string {
    if (active?.isActive) classes.push(active.activeClass)

    return classes.join(' ').replace(/ +/g, ' ')
}
