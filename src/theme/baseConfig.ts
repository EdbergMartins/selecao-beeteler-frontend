export default {
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid #0000001f',
          boxShadow: 'none'
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 32
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined'
      }
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained'
      },
      styleOverrides: {
        root: {
          fontWeight: 700,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none'
          }
        }
      }
    },
    MuiLoadingButton: {
      defaultProps: {
        variant: 'contained'
      },
      styleOverrides: {
        root: {
          fontWeight: 700,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none'
          }
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        sizeMedium: {
          color: '#546E7A'
        },
        root: {
          padding: 16
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: 'Nunito',
          fontSize: 10,
          fontWeight: 400,
          lineHeight: 14,
          marginBottom: 20,
          textAlign: 'center',
          padding: '4px 8px',
          alignItems: 'center'
        }
      }
    },
    MuiAlert: {
      defaultProps: {
        severity: 'error'
      }
    },
    MuiMobileStepper: {
      styleOverrides: {
        dot: {
          width: '12px',
          height: '12px',
          marginRight: '6px'
        }
      }
    }
  }
};
