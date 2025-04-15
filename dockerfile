FROM docker.elastic.co/beats/metricbeat:8.9.0

USER root

# Copy metricbeat.yml
COPY metricbeat.yml /usr/share/metricbeat/metricbeat.yml
RUN chown root:root /usr/share/metricbeat/metricbeat.yml && \
    chmod 644 /usr/share/metricbeat/metricbeat.yml

# Copy filebeat.yml
COPY filebeat.yml /usr/share/filebeat/filebeat.yml
RUN chown root:root /usr/share/filebeat/filebeat.yml && \
    chmod 644 /usr/share/filebeat/filebeat.yml

USER metricbeat
