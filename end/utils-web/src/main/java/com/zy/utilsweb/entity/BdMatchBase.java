package com.zy.utilsweb.entity;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class BdMatchBase {
    List<BdMatchBaseList> list;

    @Data
    public static class BdMatchBaseList implements Serializable {
        String title;
        List<ContentList> contentList;

        @Data
        public static class ContentList implements Serializable {
            String url;
            Object content;
        }
    }
}
