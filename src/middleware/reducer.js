import {
  GET_BRANCH_DETAILS,
  GET_BRANCH_REPORTS,
  POST_BRANCH_DETAILS,
  POST_BRANCH_REPORTS,
  GET_ALERT_COUNT,
  GET_DASHBOARD_DATA
} from './actions';

const initialState = {
  isLoading: true,
  branches: [],
  postBranchResponse: {
    statusCode: 10
  },
  postBranchDetailsResponse: {
    statusCode: 10
  },
  branchReport: {
    Branch: "Demo",
    Image: "image1.jpg",
    People_count: 10
  },
  alertCount: [],
  dashboardData: {
    Branch_count: 0,
    Alert_count: 0,
    People_count: 0
  }
}

export default function (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case GET_BRANCH_DETAILS:
      return {
        ...state,
        isLoading: false,
          branches: action.payload
      }
      case GET_BRANCH_REPORTS:
        return {
          ...state,
          isLoading: false,
            branchReport: action.payload
        }
        case POST_BRANCH_DETAILS:
          return {
            ...state,
            isLoading: false,
              postBranchResponse: {
                statusCode: action.payload
              }
          }
          case POST_BRANCH_REPORTS:
            return {
              ...state,
              isLoading: false,
                postBranchDetailsResponse: {
                  statusCode: action.payload
                }
            }
            case GET_ALERT_COUNT:
              return {
                ...state,
                isLoading: false,
                  alertCount: action.payload
              }
              case GET_DASHBOARD_DATA:
                return {
                  ...state,
                  isLoading: false,
                  dashboardData: action.payload
                }
              default:
                return state;
  }
}