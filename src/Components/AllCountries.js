import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textTransform: 'uppercase',
    fontSize: 20
  },
  body: {
    fontSize: 18,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function AllCountries() {

  const [api, setApi] = useState([{}]);


  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
      let data = await response.json();
      setApi(Object.values(Object.values(data.countryitems[0])));

      console.log(data.countryitems[0][117]);
    }
    getData();
  }, [])

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Countries</StyledTableCell>
            <StyledTableCell align="right">Total Cases</StyledTableCell>
            <StyledTableCell align="right">Total Active Cases</StyledTableCell>
            <StyledTableCell align="right">Total Deaths</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {api.map((key, ind) => {
            return (
              <StyledTableRow key={ind}>
                <StyledTableCell component="th" scope="row" >
                  {api[ind].title}
                </StyledTableCell>
                <StyledTableCell align="right">{api[ind].total_cases}</StyledTableCell>
                <StyledTableCell align="right">{api[ind].total_active_cases}</StyledTableCell>
                <StyledTableCell align="right">{api[ind].total_deaths}</StyledTableCell>
              </StyledTableRow>
            )
          })}

        </TableBody>
      </Table>
    </TableContainer>
  );
};



// import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 1000,
//     margin: '0 auto'

//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
//   title: {
//     color: '#3f51b5',
//     textTransform: 'uppercase'
//   },
//   fig: {
//     color: 'red',
//   }

// }));

// export default function AllCountries() {

//   const [api, setApi] = useState([{}]);

//   useEffect(() => {
//     async function getData() {
//       const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
//       let data = await response.json();

//       console.log(data);

//       //   delete data.results[0].source;
//       delete data.countryitems[0].source;
//       // delete data.countryitems[0][117].ourid;;
//       // delete data.countryitems[0][117].code;
//       setApi(Object.values((data.countryitems[0])));

//       console.log(data.countryitems[0][117]);
//       //   console.log(data.countryitems[1][]);
//     }
//     getData();
//   }, [])

//   const classes = useStyles();


//   return (
//     <div className={classes.root}>
//       <Grid container spacing={3} >
//         {Object.keys(api[0]).map((key, ind) => {
//           return (
//             <Grid item xs={12} sm={4} key={ind}  >
//               <Paper
//                 className={classes.paper}
//                 elevation={5}>
//                 <h3 className={classes.title}>
//                   {key.replace(/_/, " ")}
//                 </h3>
//                 <h3 className={classes.fig}>
//                   {api[117][key]}
//                 </h3>
//               </Paper>
//             </Grid>
//           )
//         })}
//       </Grid>
//     </div>
//   );
// }
