CREATE DATABASE spbseeker;
CREATE ROLE spbseeker WITH PASSWORD 'spbseeker' LOGIN;
GRANT ALL PRIVILEGES ON DATABASE spbseeker to spbseeker;
ALTER DATABASE spbseeker OWNER TO spbseeker;
