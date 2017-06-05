import * as styleDefs from '../../../styles/styleDefs';

export default {
  button: {
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '4px',
    height: 'auto',
    lineHeight: 1,
    margin: '5px',
    minWidth: '130px',
    color: '#fff',
    padding: '16px',
    opacity: props => {
      return props.disabled ? styleDefs.DISABLED_OPACITY : styleDefs.ACTIVE_OPACITY;
    },
    cursor: props => {
      return props.disabled ? 'default' : 'pointer';
    },
    backgroundColor: props => {
      let color = styleDefs.PRIMARY;
        if(props.success){
          if(props.light){
            color = styleDefs.SUCCESS_LIGHT;
          }
          else if(props.dark){
            color = styleDefs.SUCCESS_DARK;
          }
          else{
            color = styleDefs.SUCCESS;
          }
        }
        else if(props.warning){
          if(props.light){
            color = styleDefs.WARNING_LIGHT;
          }
          else if(props.dark){
            color = styleDefs.WARNING_DARK;
          }
          else{
            color = styleDefs.WARNING;
          }
        }
        else if(props.error){
          if(props.light){
            color = styleDefs.ERROR_LIGHT;
          }
          else if(props.dark){
            color = styleDefs.ERROR_DARK;
          }
          else{
            color = styleDefs.ERROR;
          }
        }
        else if(props.other){
          if(props.light){
            color = styleDefs.OTHER_LIGHT;
          }
          else if(props.dark){
            color = styleDefs.OTHER_DARK;
          }
          else{
            color = styleDefs.OTHER;
          }
        }
        else if(props.light){
          color = styleDefs.PRIMARY_LIGHT;
        }
        else if(props.dark){
          color = styleDefs.PRIMARY_DARK;
        }
        return color;
    },
    '&:hover': {
      backgroundColor: props => {
      let color = styleDefs.PRIMARY;
        if(props.success){
          if(props.light){
            color = styleDefs.SUCCESS_LIGHT;
          }
          else if(props.dark){
            color = styleDefs.SUCCESS_DARK;
          }
          else{
            color = styleDefs.SUCCESS;
          }
        }
        else if(props.warning){
          if(props.light){
            color = styleDefs.WARNING_LIGHT;
          }
          else if(props.dark){
            color = styleDefs.WARNING_DARK;
          }
          else{
            color = styleDefs.WARNING;
          }
        }
        else if(props.error){
          if(props.light){
            color = styleDefs.ERROR_LIGHT;
          }
          else if(props.dark){
            color = styleDefs.ERROR_DARK;
          }
          else{
            color = styleDefs.ERROR;
          }
        }
        else if(props.other){
          if(props.light){
            color = styleDefs.OTHER_LIGHT;
          }
          else if(props.dark){
            color = styleDefs.OTHER_DARK;
          }
          else{
            color = styleDefs.OTHER;
          }
        }
        else if(props.light){
          color = styleDefs.PRIMARY_LIGHT;
        }
        else if(props.dark){
          color = styleDefs.PRIMARY_DARK;
        }
        return color;
      }
    }
  }
};
