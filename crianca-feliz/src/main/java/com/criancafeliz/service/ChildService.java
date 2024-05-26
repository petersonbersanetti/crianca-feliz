package com.criancafeliz.service;

import com.criancafeliz.model.Child;
import com.criancafeliz.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ChildService {

    public Child createChild (Child child, User user);

    public Child findChildById (Long id) throws Exception;

    public void deleteChild (Long id) throws Exception;

    public Child updateChild (Child child, Long id) throws Exception;

    public List<Child> findAllChild();

    public List<Child> findChildrenByUser (User user) throws Exception;

}
