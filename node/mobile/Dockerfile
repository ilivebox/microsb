FROM ilivebox/heroku-nodejs:v5.11.0

MAINTAINER geminiyellow<geminiyellow@gmail.com>

# Set Up the NativeScript CLI on Linux
# http://docs.nativescript.org/angular/start/ns-setup-linux

# System Requirements
# - Ubuntu 14.04 LTS
# - The latest Node.js 0.10.x, 0.12.x, 4.x, or 5.x stable official release
# - G++ compiler
# - JDK 8 or a later stable official release
# - Android SDK 22 or a later stable official release
# - Local Maven repository for Support Libraries
# - Android SDK Build-tools 23.0.0 or a later stable official release
# - (Optional) Genymotion to expand your testing options

# Environment Requirements
# - JAVA_HOME environment variable must be set
# - ANDROID_HOME environment variable must be set

# Setup
# ---------------------------------------------------------
# ---- Install required tools
RUN apt-get update -qq

# If you are running on a 64-bit system, install the runtime libraries for the ia32/i386 architecture.
RUN apt-get install -y lib32z1 lib32ncurses5 lib32bz2-1.0 lib32stdc++6

# Install the G++ compiler.
RUN apt-get install g++

# ---------------------------------------------------------
# ---- Install JDK 8 or a later stable official release.
# - Run the following commands.
RUN apt-get install -y software-properties-common
RUN add-apt-repository ppa:webupd8team/java
RUN apt-get update -qq
RUN echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections
RUN apt-get install -y oracle-java8-installer

# - After installation if you have multiple installations of java you can choose which to use:
RUN update-alternatives --config java

# - Set the JAVA_HOME system environment variable.
ENV JAVA_HOME /usr/lib/jvm/java-8-oracle

# ---------------------------------------------------------
# ---- Download Android SDK tools into $ANDROID_HOME
# - Install the Android SDK.
RUN curl http://dl.google.com/android/android-sdk_r24.2-linux.tgz | tar xz -C /usr/local/

# - Set the ANDROID_HOME system environment variable.
ENV ANDROID_HOME /usr/local/android-sdk-linux
ENV PATH $PATH:$ANDROID_HOME/tools
ENV PATH $PATH:$ANDROID_HOME/platform-tools

# - Install the required Android SDKs and the Local Maven repository for Support Libraries.
# -- android list sdk --all --extended
RUN echo y | android update sdk --no-ui --all --filter tools
RUN echo y | android update sdk --no-ui --all --filter platform-tools
RUN echo y | android update sdk --no-ui --all --filter extra-android-support
RUN echo y | android update sdk --no-ui --all --filter extra-android-m2repository
RUN echo y | android update sdk --no-ui --all --filter extra-google-m2repository
RUN echo y | android update sdk --no-ui --all --filter extra-google-google_play_services
RUN echo y | android update sdk --no-ui --all --filter android-23
RUN echo y | android update sdk --no-ui --all --filter build-tools-23.0.1

# Create emulator to run tests:
#RUN echo y | android update sdk --no-ui --all --filter --force sys-img-armeabi-v7a-google_apis-23
#RUN echo n | android create avd --force --name "google" --target android-23 --abi "google_apis/armeabi-v7a"

RUN apt-get clean

# ---------------------------------------------------------
# ---- Install the NativeScript CLI.
RUN npm install nativescript -g --unsafe-perm

CMD ["bash"]
