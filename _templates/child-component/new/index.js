const { pascalCase } = require('change-case')

module.exports = {
  params: ({ args }) => {
    args.Name = pascalCase(args.name)
    if (args.parent) args.Parent = pascalCase(args.parent)
    console.log(args)
    return args
  },
}
