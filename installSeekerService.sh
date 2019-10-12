rm -rf /etc/systemd/system/spbseeker.service

if test "$1" = ""; then
  echo "You should set spring profile!"
fi

echo "[Unit]
Description=The BST SpbSeeker
After=syslog.target

[Service]
User=root
ExecStart=/usr/bin/java -Xms512m -Xmx2048m -jar -Dspring.profiles.active=$1 /opt/bst/spbseeker.jar
SuccessExitStatus=143

[Install]
WantedBy=multi-user.target" >> /etc/systemd/system/spbseeker.service