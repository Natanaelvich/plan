import React, { useReducer, useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Option } from '../../components/Option';
import { Button } from '../../components/Button';
import { PlanInfo, PlanInfoProps } from '../../components/PlanInfo';

import { styles } from './styles';
import { ReducerPlan } from './reducer';

const initialState = { plan: { name: "Basic", value: "5.25" } };

export function Plan() {
  const [state, dispatch] = useReducer(ReducerPlan, initialState);
  const [emailSent, setEmailSent] = useState(false);

  console.log(state)
  function handleChangePlan(plan: string) {
    if (plan === 'basic') {
        dispatch({type: 'PLAN_BASIC'})
    } else {
        dispatch({type: 'PLAN_PREMIUM'})
    }
  }

  function handleSubscribe() {
    setEmailSent(true);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} testID="keyboard">
      <View style={styles.container}>
        <Header />

        <PlanInfo
          name={state.plan.name}
          value={state.plan.value}
        />

        <View style={styles.options}>
          <Option
            title="Premium"
            active={state.plan.name === 'Premium'}
            onPress={() => handleChangePlan('premium')}
            testID="option-premium"
          />
          <Option
            title="Basic"
            active={state.plan.name === 'Basic'}
            onPress={() => handleChangePlan('basic')}
          />
        </View>

        <Input
          placeholder="your email"
          testID="input-email"
        />

        {
          emailSent &&
          <Text style={styles.confirmation} testID="confirmation-message">
            We send you a  {'\n'}
            confirmation email.
          </Text>
        }

        <Button
          title="Subscribe"
          onPress={handleSubscribe}
          testID="button-subscribe"
        />

        <Text style={styles.details} testID="plan-note">
          If the price changes, we'll notify you beforehand.
          You cam check your renewal date or cancel anytime via your Account page.
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}