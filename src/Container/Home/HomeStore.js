import { bindActionCreators } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { counterSlice, decrement, decrementByAmount, increment, incrementByAmount, resetCount } from "../../Store/counterSlice";
// import { addDoctorsByCode } from "../../../store/user/userSlice";

const mapStateToProps = (state) => {
  return {
    counterNum: state.count.count,
    // counterNum: state.counter.count,
    // counterNum: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
 {increment: increment,
  decrement: decrement,
  incrementByAmount:incrementByAmount,
  decrementByAmount:decrementByAmount,
  resetCount:resetCount},  
    dispatch
  );

const HomeStore = (Container) =>
  connect(mapStateToProps, mapDispatchToProps)(Container);

export default HomeStore;
