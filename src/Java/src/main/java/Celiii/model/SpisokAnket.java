package Celiii.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Celiii.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: СписокАнкет
 */
@Entity(name = "IISCeliiiСписокАнкет")
@Table(schema = "public", name = "СписокАнкет")
public class SpisokAnket {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Ankety")
    @Convert("Ankety")
    @Column(name = "Анкеты", length = 16, unique = true, nullable = false)
    private UUID _anketyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Ankety", insertable = false, updatable = false)
    private Ankety ankety;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PrichinUvoln")
    @Convert("PrichinUvoln")
    @Column(name = "ПричинУвольн", length = 16, unique = true, nullable = false)
    private UUID _prichinuvolnid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PrichinUvoln", insertable = false, updatable = false)
    private PrichinUvoln prichinuvoln;


    public SpisokAnket() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}