import { useMutation, useQuery } from "react-query";
import helpers from "../../helpers";
import { apiUrl } from "../../constants/api-url";
import { PlanProjectionProps, createPlanProps } from "./-plan-interface";


class planMethods {
   constructor() {
      //nothing here for now
   }

   getPlan(keyName: string, runQuery?: boolean, planID?: any,) {
      const { isLoading, refetch, data, error } = useQuery([keyName],
         () => helpers.sendRequest(`${apiUrl.plan.createAndGetPlan}/${planID || ''}`)
         , { enabled: runQuery })
      return { isLoading, error, refetch, data }
   }

   createPlan(mutateState?: any) {

      const processReqest = (data: createPlanProps) => {
         //if there's no email
         if (!data.plan_name) {
            return helpers.showToast("Plan is required")
         }
         if (!data.amount) {
            return helpers.showToast("password is required")
         }
         //if password is not 8min
         if (isNaN(data.amount)) {
            return helpers.showToast("Amount is invalid")
         }
         //if password is not 8min
         if (!data.createdAt) {
            return helpers.showToast("Maturity date is required")
         }
         let sendData: any = {
            plan_name: data.plan_name,
            target_amount: data.amount,
            maturity_date: data.createdAt
         }
         mutation.mutate(sendData)
      }

      const mutation = useMutation(payload => helpers.sendRequest(apiUrl.plan.createAndGetPlan, payload, 'POST'), {
         onSuccess: (res) => {
            //if the resquest is not successful
            if (res.statusCode !== 200) {
               let getErr = Object.values(res?.data?.data || res?.data || {})
               //if there's an error
               return helpers.showToast(getErr.length > 0 ? getErr[0] : "Request Failed")
            }
            mutateState((d: object) => ({ ...d, showSuccess: true }))
         },
         onError: (error) => {
            helpers.showToast("Request Failed")
         }
      })
      const { error, data, reset, isLoading } = mutation
      return { processReqest, error, data, reset, isLoading }
   }


   getPlanProjection(payload: PlanProjectionProps) {

      let reqURL = `${apiUrl.plan.getProjection}?target_amount=${payload?.amount}&maturity_date=${payload?.createdAt}`
      const { error, data, refetch, isLoading } = useQuery(["plan-projection"],
         () => helpers.sendRequest(reqURL), { retry: false, retryOnMount: false })

      return { error, data, refetch, isLoading }
   }
}

export default new planMethods()