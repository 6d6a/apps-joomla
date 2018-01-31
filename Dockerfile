FROM alpine:edge

ENV PHANTOMJS_ARCHIVE="phantomjs.tar.gz"

RUN echo '@edge http://nl.alpinelinux.org/alpine/edge/main'>> /etc/apk/repositories && apk --update add curl python3 && curl -Lk -o $PHANTOMJS_ARCHIVE https://github.com/fgrehm/docker-phantomjs2/releases/download/v2.0.0-20150722/dockerized-phantomjs.tar.gz && tar -xf $PHANTOMJS_ARCHIVE -C /tmp/ && cp -R /tmp/etc/fonts /etc/ && cp -R /tmp/lib/* /lib/ && cp -R /tmp/lib64 / && cp -R /tmp/usr/lib/* /usr/lib/ && cp -R /tmp/usr/lib/x86_64-linux-gnu /usr/ && cp -R /tmp/usr/share/* /usr/share/ && cp /tmp/usr/local/bin/phantomjs /usr/bin/ && rm -rf $PHANTOMJS_ARCHIVE /tmp/* && pip3 install selenium
COPY dist /dist
RUN tar czf joomla-3.8.4.tgz -C /dist . && chmod o+r joomla-3.8.4.tgz

COPY install.py /install
WORKDIR /workdir
ENTRYPOINT /install
