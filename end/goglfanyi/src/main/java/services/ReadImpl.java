package services;

import Utils.GetFiles;
import Utils.ReqUtils;
import com.alibaba.fastjson.JSONObject;

import java.io.*;
import java.util.ArrayList;

public class ReadImpl {
    public void ReadTxt(File file) {
        try {
            String content = "";
            String fileName = file.getName();

            BufferedReader br = new BufferedReader(new FileReader("./read/" + fileName));

            String ss = "";
            while ((ss = br.readLine()) != null) {
                content = content + ss;
            }

            ReqUtils util = new ReqUtils();

            String res = util.fanyi("zh-CN", "en", content);
            if (res == "服务器异常"){
                throw new RuntimeException("HttpClient,error status code");
            }
            String fanyi = JSONObject.parseObject(JSONObject.parseObject(res).get("content").toString()).get("out").toString();
//                System.out.println("中-英" + fanyi);

            if (fanyi.length() > 5000) {
                String s1 = fanyi.substring(0, 2000);
                String s2 = fanyi.substring(2000, 4000);
                String s3="";
                if (fanyi.length()>6000) {
                   s3 = fanyi.substring(4000, 6000);
                }else {
                    s3 = fanyi.substring(4000,fanyi.length());
                }
//                    System.out.println(s1);
//                    System.out.println(s2);
                res = util.fanyi("en", "ja", s1);
                fanyi = JSONObject.parseObject(JSONObject.parseObject(res).get("content").toString()).get("out").toString();
                res = util.fanyi("en", "ja", s2);
                fanyi = fanyi + JSONObject.parseObject(JSONObject.parseObject(res).get("content").toString()).get("out").toString();
                res = util.fanyi("en", "ja", s3);
                fanyi = fanyi + JSONObject.parseObject(JSONObject.parseObject(res).get("content").toString()).get("out").toString();
//                    System.out.println("英-日" + fanyi);
            } else {
                res = util.fanyi("en", "ja", fanyi);
                fanyi = JSONObject.parseObject(JSONObject.parseObject(res).get("content").toString()).get("out").toString();
//                    System.out.println("英-日" + fanyi);
            }
            res = util.fanyi("ja", "zh-CN", fanyi);
            fanyi = JSONObject.parseObject(JSONObject.parseObject(res).get("content").toString()).get("out").toString();
//                System.out.println("日-中" + fanyi);
            try {
                fanyi = fanyi.replaceAll("\\s和", "");
                fanyi = fanyi.replaceAll("您的位置\\S*gt；", "");
                OutputStreamWriter ow = new OutputStreamWriter(new FileOutputStream(new File("./wirter/" + fileName + ".txt")));

                ow.write(fanyi);
                ow.flush();
                ow.close();
            } catch (FileNotFoundException ex) {
                ex.printStackTrace();
            } catch (IOException ex) {
                ex.printStackTrace();
            } catch (NullPointerException nu) {

            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
