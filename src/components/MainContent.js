import { Box, Grid, Pagination } from "@mui/material";
import React, { useState } from "react";
import JobCard from "./JobCard";

function MainContent({ jobs }) {
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const numberPage = Math.ceil(jobs.length / limit);

  const handleChangePage = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
        sx={{ pt: 5 }}
      >
        {jobs?.slice((page - 1) * limit, page * limit).map((job, index) => (
          <Grid item key={job.id}>
            <JobCard job={job} index={index} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", m: 3, width: 1 }}>
        <Pagination
          color="primary"
          count={numberPage}
          page={page}
          onChange={handleChangePage}
        />
      </Box>
    </>
  );
}

export default MainContent;
