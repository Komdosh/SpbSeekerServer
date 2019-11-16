if test "$1" = ""; then
  echo "You should set spring profile!"
fi

rm -rf /etc/systemd/system/spbseeker.service

echo "[Unit]
Description=SpbSeeker
After=syslog.target

[Service]
User=root
ExecStart=/usr/bin/java -Xms256m -Xmx1024m -jar -Dspring.profiles.active=$1 /opt/spbseeker.jar
SuccessExitStatus=143

[Install]
WantedBy=multi-user.target" >> /etc/systemd/system/spbseeker.service
