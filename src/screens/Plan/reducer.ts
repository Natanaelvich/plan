

export function ReducerPlan(_ : any, action: any) {
  switch (action.type) {
    case "PLAN_BASIC":
      return { plan: { name: "Basic", value: "5.25" } };
    case "PLAN_PREMIUM":
      return {
        plan: {
          name: "Premium",
          value: "6.99",
        },
      };
    default:
      throw new Error();
  }
}
