export const stringifyCSSVars = ({
  vars,
  selector = ':root'
}: {
  vars: Array<[string, string]>
  selector?: string
}) => `${selector}{${vars.reduce((acc, v) => `${acc}${v[0]}:${v[1]};`, '')}}`
