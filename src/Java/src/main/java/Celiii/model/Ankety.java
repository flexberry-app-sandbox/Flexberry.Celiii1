package Celiii.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Celiii.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Анкеты
 */
@Entity(name = "IISCeliiiАнкеты")
@Table(schema = "public", name = "Анкеты")
public class Ankety {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаЗаполн")
    private Date датазаполн;

    @Column(name = "КакойСтаж")
    private String какойстаж;

    @Column(name = "ВозрастСотруд")
    private String возрастсотруд;

    @Column(name = "ОтносКатСотр")
    private String относкатсотр;

    @Column(name = "Коммент")
    private String коммент;

    @Column(name = "ОценРабот")
    private String оценработ;

    @Column(name = "ГлавнПричин")
    private String главнпричин;

    @Column(name = "Номер")
    private Integer номер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Specialist")
    @Convert("Specialist")
    @Column(name = "Специалист", length = 16, unique = true, nullable = false)
    private UUID _specialistid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Specialist", insertable = false, updatable = false)
    private Specialist specialist;


    public Ankety() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаЗаполн() {
      return датазаполн;
    }

    public void setДатаЗаполн(Date датазаполн) {
      this.датазаполн = датазаполн;
    }

    public String getКакойСтаж() {
      return какойстаж;
    }

    public void setКакойСтаж(String какойстаж) {
      this.какойстаж = какойстаж;
    }

    public String getВозрастСотруд() {
      return возрастсотруд;
    }

    public void setВозрастСотруд(String возрастсотруд) {
      this.возрастсотруд = возрастсотруд;
    }

    public String getОтносКатСотр() {
      return относкатсотр;
    }

    public void setОтносКатСотр(String относкатсотр) {
      this.относкатсотр = относкатсотр;
    }

    public String getКоммент() {
      return коммент;
    }

    public void setКоммент(String коммент) {
      this.коммент = коммент;
    }

    public String getОценРабот() {
      return оценработ;
    }

    public void setОценРабот(String оценработ) {
      this.оценработ = оценработ;
    }

    public String getГлавнПричин() {
      return главнпричин;
    }

    public void setГлавнПричин(String главнпричин) {
      this.главнпричин = главнпричин;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }


}