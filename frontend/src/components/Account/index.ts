import { compose } from "recompose";
import { connect } from "react-redux";
import { getUser } from "@actions/index";
import { selectUser } from "@selectors/user";
import { IState } from "@typings/state/index";
import Account from "./Account";
