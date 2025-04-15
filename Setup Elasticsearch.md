Setup Elasticsearch

docker network create elk
docker run -d --name elasticsearch --net elk -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -e "ES_JAVA_OPTS=-Xms512m -Xmx512m" -e "xpack.security.enabled=false" -e "xpack.security.transport.ssl.enabled=false" docker.elastic.co/elasticsearch/elasticsearch:8.9.0

Deploy logstash (create logstash.conf file before)

docker run -d --name logstash --net elk -p 5044:5044 -v $(pwd)/logstash.conf:/usr/share/logstash/pipeline/logstash.conf docker.elastic.co/logstash/logstash:8.9.0

Deploy Kibana

docker run -d --name kibana --net elk -p 5601:5601 -e "ELASTICSEARCH_HOSTS=http://elasticsearch:9200" docker.elastic.co/kibana/kibana:8.9.0

Create filebeat.yml for log collection

docker run -d --name filebeat --net elk -v C:\Users\alpha\Assignment\demoWebApp\filebeat.yml:/usr/share/filebeat/filebeat.yml -v /var/log/app://var/log/app docker.elastic.co/beats/filebeat:8.9.0

Deploy metricbeat.yml for system metrics

docker run -d --name metricbeat --net elk -v C:\Users\alpha\Assignment\demoWebApp\metricbeat.yml:/usr/share/metricbeat/metricbeat.yml --pid=host docker.elastic.co/beats/metricbeat:8.9.0

Integration with node.js app

npm install winston elastic-apm-node @elastic/elasticsearch

Creation of logger.js and apm.js file

Updation of main app file

Run to build docker image:docker-compose up -d
