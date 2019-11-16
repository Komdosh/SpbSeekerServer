profile="dev"
port="5439"

if test "$profile" = ""; then
  echo "You should set server: dev or prod or set url host with port!"
  echo "./init.sh dev"
  echo "./init.sh prod"
  echo "./init.sh 127.0.0.1 5432"
  exit 1
fi

pgHost="127.0.0.1"
pgPort="5439"
if test "$profile" = "dev"; then
  pgHost="127.0.0.1"
elif test "$profile" = "prod"; then
  pgHost="185.91.53.30"
else
  pgHost="$profile"
  if ! test "$port" = ""; then
    pgPort="$port"
  fi
fi

mkdir /var/lib/postgresql/dump

getDataFor(){
  dbName=$1
  echo "Start $dbName db dumping with $profile server"
  export PGPASSWORD="$dbName"
  echo "" >> /var/lib/postgresql/dump/"$dbName".sql
  pg_dump -v --file=/var/lib/postgresql/dump/"$dbName".sql --inserts --create --if-exists --clean --blobs --dbname="$dbName" --username="$dbName" --host="$pgHost" --port="$pgPort" --schema="public"
  echo "Dumping of $dbName db is finished"
  echo "Restore $dbName data to docker db"
  psql -d "$dbName" -U "$dbName" -a -f /var/lib/postgresql/dump/"$dbName".sql
  echo "$dbName data restored"
}

getDataFor "spbseeker"

rm -rf /var/lib/postgresql/dump
export PGPASSWORD=psql
