const { pascalCase } = require('change-case')

module.exports = {
  params: ({ args }) => {
    args.Name = pascalCase(args.name)
    if (args.parent) args.Parent = pascalCase(args.parent)
    if (args.subcomponent) {
      args.subComponent = args.subcomponent
      args.subComponentName = args.Name + pascalCase(args.subcomponent)
    }
    console.log(args)
    return args
  },
}
