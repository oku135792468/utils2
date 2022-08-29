package Utils;

import org.apache.http.HttpEntity;
import org.apache.http.HttpStatus;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.CookieStore;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.conn.PoolingClientConnectionManager;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.protocol.HTTP;
import org.apache.http.util.EntityUtils;

import java.io.*;
import java.net.SocketException;
import java.util.ArrayList;
import java.util.List;

public class ReqUtils {
    public String fanyi(String from, String to, String parm) {

        String res = null;
        String url = "http://fy.iciba.com/ajax.php?a=fy";
        List<NameValuePair> parList = new ArrayList<NameValuePair>();

        parList.add(new BasicNameValuePair("f", from));
        parList.add(new BasicNameValuePair("t", to));
        parList.add(new BasicNameValuePair("w", parm));

        DefaultHttpClient client = new DefaultHttpClient(new PoolingClientConnectionManager());

        CloseableHttpResponse response = null;
        try {
            //创建post请求
            HttpPost httpPost = new HttpPost(url);
            // 设置请求和传输超时时间
            RequestConfig requestConfig = RequestConfig.custom()
                    .setSocketTimeout(2000).setConnectTimeout(2000).build();
            httpPost.setConfig(requestConfig);

            // 提交参数发送请求
            UrlEncodedFormEntity urlEncodedFormEntity = new UrlEncodedFormEntity(parList, HTTP.UTF_8);
            httpPost.setEntity(urlEncodedFormEntity);
            try {
                response = client.execute(httpPost);
            } catch (SocketException e) {
                return "服务器异常";
            }
//            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(connection.getInputStream(), "UTF-8"));
            // 得到响应信息
            int statusCode = response.getStatusLine().getStatusCode();
            // 判断响应信息是否正确
            if (statusCode != HttpStatus.SC_OK) {
                // 终止并抛出异常
                httpPost.abort();
                throw new RuntimeException("HttpClient,error status code :" + statusCode);
            }
            HttpEntity entity = response.getEntity();
            if (entity != null) {
                res = EntityUtils.toString(entity, "utf-8");
            }
            EntityUtils.consume(entity);

        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

//        List cook = cookieStore.getCookies();
//        for (int a =0;a <cook.size();a++) {
//            System.out.println(cook.get(a).toString());
//        }
//        client.close();
//        response.close();

        return res;

    }

}
