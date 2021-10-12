import { PlanInfoProps } from "../../components/PlanInfo";

type StateProps = {
  plan: PlanInfoProps;
  emailSent: boolean;
};

export function ReducerPlan(state: StateProps, action: any) {
  switch (action.type) {
    case "PLAN_BASIC":
      return { ...state, plan: { name: "Basic", value: "5.25" } };
    case "PLAN_PREMIUM":
      return {
        ...state,
        plan: {
          name: "Premium",
          value: "6.99",
        },
      };
    case "EMAIL_SENT_TRUE":
      return {
        ...state,
        emailSent: true,
      };
    case "EMAIL_SENT_FALSE":
      return {
        ...state,
        emailSent: false,
      };
    default:
      throw new Error();
  }
}
